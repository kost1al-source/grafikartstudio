import React from 'react';
import { useInView } from '../hooks/useInView';

interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 650,
  className = '',
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
}) => {
  const { ref, isInView } = useInView({ threshold, rootMargin, triggerOnce: true });

  const getTransform = () => {
    if (isInView) return 'translate3d(0, 0, 0) scale(1)';
    switch (direction) {
      case 'up':
        return 'translate3d(0, 36px, 0)';
      case 'down':
        return 'translate3d(0, -36px, 0)';
      case 'left':
        return 'translate3d(36px, 0, 0)';
      case 'right':
        return 'translate3d(-36px, 0, 0)';
      case 'none':
      default:
        return 'translate3d(0, 0, 0) scale(0.96)';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transform: getTransform(),
        opacity: isInView ? 1 : 0,
        filter: isInView ? 'blur(0px)' : 'blur(4px)',
        transitionProperty: 'opacity, transform, filter',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform, filter',
      }}
      className={className}
    >
      {children}
    </div>
  );
};
