import { useEffect, useRef } from 'react';

interface Props {
  /** Lines of text to reveal, e.g. ["Luz", "Mulinaris"]. */
  lines: string[];
}

/**
 * Big display name that "draws itself in" as it scrolls through the viewport
 * (ownitt.fr-style). Each glyph rises from a mask line, staggered, driven by
 * scroll progress. Falls back to fully-revealed when reduced motion is set.
 */
export default function ScrollName({ lines }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const glyphs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      glyphs.current.forEach((g) => {
        g.style.transform = 'none';
        g.style.opacity = '1';
      });
      return;
    }

    const total = glyphs.current.length;
    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the block's top hits the bottom of the viewport,
      // 1 once it has travelled ~75% of the way up.
      const raw = (vh - rect.top) / (vh * 0.85);
      const p = Math.min(1, Math.max(0, raw));

      glyphs.current.forEach((g, i) => {
        const start = (i / total) * 0.6; // last glyph starts at 0.6
        const local = Math.min(1, Math.max(0, (p - start) / 0.4));
        const eased = 1 - Math.pow(1 - local, 3);
        g.style.transform = `translateY(${(1 - eased) * 105}%)`;
        g.style.opacity = `${Math.max(0.05, eased)}`;
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  glyphs.current = [];
  let counter = 0;

  return (
    <div ref={root} aria-label={lines.join(' ')} role="img">
      {lines.map((line, li) => (
        <span key={li} className="block overflow-hidden">
          <span className="flex flex-wrap">
            {Array.from(line).map((ch, ci) => {
              const idx = counter++;
              return (
                <span
                  key={`${li}-${ci}`}
                  aria-hidden="true"
                  ref={(node) => {
                    if (node) glyphs.current[idx] = node;
                  }}
                  className="inline-block will-change-transform"
                  style={{ transform: 'translateY(105%)', opacity: 0.05 }}
                >
                  {ch === ' ' ? ' ' : ch}
                </span>
              );
            })}
          </span>
        </span>
      ))}
    </div>
  );
}
