import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    if (!formspreeEndpoint) {
      throw new Error('FORMSPREE_ENDPOINT is not configured');
    }

    const data = await req.json();
    if (!data.message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Format the message based on whether it's from chat or form
    const formattedData = {
      ...data,
      _subject: data.subject || `New Project Inquiry${data.name ? ` from ${data.name}` : ' from Chat'}`,
      _template: 'table',
      // If it's from chat, include a note
      source: data.subject ? 'Contact Form' : 'Chat Bot',
      // If there's no email (from chat), use a default
      email: data.email || 'chat_inquiry@portfolio.com',
      // Add timestamp
      timestamp: new Date().toISOString()
    };

    console.log('Sending email request to Formspree...');
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formattedData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(`Formspree error: ${response.status} ${errorData ? JSON.stringify(errorData) : response.statusText}`);
    }

    console.log('Email sent successfully');
    return NextResponse.json({ 
      success: true, 
      message: "Thank you for your message! I'll get back to you soon." 
    });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to send message. Please try again or email me directly at dongobbinshombo@gmail.com',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
