import React, { useEffect, useState } from 'react';

/**
 * Ambient interactive spotlight tracking mouse position.
 * Gently illuminates dark surfaces with a subtle cyan/slate radial glow.
 */
export const AmbientSpotlight: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices to conserve battery & performance
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 ease-out"
      style={{
        background: `radial-gradient(750px circle at ${position.x}px ${position.y}px, rgba(14, 165, 233, 0.045), rgba(56, 189, 248, 0.015) 40%, transparent 80%)`,
      }}
      aria-hidden="true"
    />
  );
};
