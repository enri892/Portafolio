import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useFadeIn = (delay = 0) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.fromTo(element,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: delay,
        ease: "power2.out"
      }
    );
  }, [delay]);

  return elementRef;
};

export const useStaggerIn = (delay = 0) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.children;
    
    gsap.fromTo(children,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: delay,
        stagger: 0.2,
        ease: "power2.out"
      }
    );
  }, [delay]);

  return containerRef;
};