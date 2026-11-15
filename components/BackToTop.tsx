"use client";

import { useEffect, useState } from "react";

/**
 * Floating "back to top" link that appears once the visitor has scrolled past the intro.
 * It's a plain link to #top, so it works with the keyboard and moves the focus starting point to the
 * top of the page; the smooth scroll (and its reduced-motion opt-out) comes from globals.css.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Watch the hero instead of listening to every scroll event: visible once it has left the viewport.
    const hero = document.getElementById("top");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      rootMargin: "-56px 0px 0px 0px", // account for the sticky header
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="#top"
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed right-4 bottom-4 z-10 rounded border border-border bg-bg/90 px-3 py-2 font-mono text-sm text-muted shadow-sm backdrop-blur transition-[opacity,translate,color,border-color] duration-200 hover:border-accent hover:text-accent sm:right-6 sm:bottom-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <span aria-hidden="true">
        <span className="text-accent">↑</span> cd ~
      </span>
    </a>
  );
}
