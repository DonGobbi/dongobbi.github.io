import { NextResponse } from 'next/server';
import { Groq } from 'groq-sdk';
import { headers } from 'next/headers';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    if (!process.env.GROQ_API_KEY) {
      throw new Error('GROQ_API_KEY is not configured');
    }

    const { message } = await req.json();
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

console.log('Received message:', message);
console.log('Processing chat message...');

    const systemPrompt = `You are an AI assistant for a portfolio website. You help visitors learn about Don's skills, experience, and discuss potential project opportunities. You are knowledgeable about full-stack development, AI technologies, and software engineering best practices. You should be professional, helpful, and encourage project inquiries.

Key information about Don:
- Full-stack developer specializing in FastAPI, Next.js, and AI technologies
- Experience with LangChain, LLAMA Index, and vector databases
- Strong background in system design and API security
- Interested in collaborating on innovative projects

When someone expresses interest in a project:
1. Show enthusiasm for their idea
2. Ask relevant questions about their requirements
3. Highlight Don's relevant skills and experience
4. Encourage them to provide more details
5. Mention that you'll help forward their inquiry to Don

Keep responses concise but informative.`;

    console.log('Sending request to Groq...');
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: systemPrompt
        },
        {
          role: 'user',
          content: message
        }
      ],
      model: 'mixtral-8x7b-32768',
      temperature: 0.7,
      max_tokens: 1000,
    });

    if (!completion.choices[0]?.message?.content) {
      throw new Error('No response from Groq');
    }

    console.log('Received response from Groq');
    const response = completion.choices[0].message.content;

    // If the message is about a project, send an email
    if (message.toLowerCase().includes('project') || 
        message.toLowerCase().includes('work together') ||
        message.toLowerCase().includes('collaborate')) {
      try {
        // Get the host from headers
        const headersList = headers();
        const host = headersList.get('host') || 'localhost:3000';
        const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
        const emailEndpoint = `${protocol}://${host}/api/email`;

        console.log('Sending email to:', emailEndpoint);
        console.log('Email payload:', {
          message: message,
          source: 'Chat Bot',
          subject: 'New Project Inquiry from Chat'
        });

        const emailResponse = await fetch(emailEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: message,
            source: 'Chat Bot',
            subject: 'New Project Inquiry from Chat'
          }),
        });

        if (!emailResponse.ok) {
          throw new Error(`Email API responded with status: ${emailResponse.status}`);
        }

        console.log('Project inquiry email sent');
      } catch (emailError) {
        console.error('Error sending email:', emailError);
      }
    }

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process chat message',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
