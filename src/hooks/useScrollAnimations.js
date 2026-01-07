import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const useScrollAnimation = (delay = 0) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Ocultar el elemento inicialmente
    gsap.set(element, {
      opacity: 0,
      y: 50
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          gsap.to(element,
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: delay,
              ease: "power2.out"
            }
          );
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, isVisible]);

  return elementRef;
};

export const useScrollStagger = (delay = 0) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Ocultar los hijos inicialmente
    const children = container.children;
    gsap.set(children, {
      opacity: 0,
      y: 30
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          gsap.to(children,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: delay,
              stagger: 0.2,
              ease: "power2.out"
            }
          );
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [delay, isVisible]);

  return containerRef;
};