'use client';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient animate-gradient-slow" />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb-1" />
        <div className="orb-2" />
        <div className="orb-3" />
        <div className="orb-4" />
      </div>

      {/* Animated lines */}
      <div className="absolute inset-0">
        <div className="lines">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="line" style={{ animationDelay: `${i * 0.5}s` }} />
          ))}
        </div>
      </div>

      {/* Overlay to soften the background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50" />
    </div>
  );
};

export default AnimatedBackground;
