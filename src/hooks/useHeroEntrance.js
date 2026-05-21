import { useEffect } from "react";
import gsap from "gsap";

export const useHeroEntrance = (containerRef) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      gsap.set(container.querySelectorAll("[data-hero]"), { opacity: 1, y: 0 });
      return;
    }

    const targets = container.querySelectorAll("[data-hero]");
    gsap.set(targets, { opacity: 0, y: 36 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      stagger: 0.12,
      ease: "back.out(1.15)",
    });
  }, [containerRef]);
};
