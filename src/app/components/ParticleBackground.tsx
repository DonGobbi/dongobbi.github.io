'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Particle[] = [];
    const particleCount = 50;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Create particles
    const createParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: Math.random() * 0.3 - 0.15,
          speedY: Math.random() * 0.3 - 0.15,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
    };

    // Animate particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Reset position if out of bounds
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
          
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 * (1 - distance / 120)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    // Initialize
    setCanvasSize();
    createParticles();
    animate();

    // Handle resize
    window.addEventListener('resize', () => {
      setCanvasSize();
      particles.length = 0;
      createParticles();
    });

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticleBackground;
