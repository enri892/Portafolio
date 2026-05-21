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
      y: 50,
      rotate: element.dataset.brutal ? -1.5 : 0,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          gsap.to(element, {
            opacity: 1,
            y: 0,
            rotate: 0,
            duration: element.dataset.brutal ? 0.85 : 1,
            delay: delay,
            ease: element.dataset.brutal ? "power4.out" : "power2.out",
          });
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
      y: 40,
      x: container.dataset.brutalStagger ? -12 : 0,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          gsap.to(children, {
            opacity: 1,
            y: 0,
            x: 0,
            duration: container.dataset.brutalStagger ? 0.7 : 0.8,
            delay: delay,
            stagger: container.dataset.brutalStagger ? 0.14 : 0.2,
            ease: container.dataset.brutalStagger ? "power4.out" : "power2.out",
          });
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