import { useEffect, useRef, useState } from 'react';

export interface LeadPart {
  text: string;
  /** Highlight this phrase with the pink marker sweep. */
  mark?: boolean;
}

interface Props {
  parts: LeadPart[];
  className?: string;
  /** ms between each word appearing */
  stagger?: number;
}

/**
 * Reveals a lead paragraph word-by-word as it enters the viewport, with a pink
 * marker that sweeps under the highlighted phrases (noxediem.ch-style).
 */
export default function LeadReveal({ parts, className = '', stagger = 45 }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [shown, setShown] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const active = shown || reduce;
  let wordIdx = 0;

  return (
    <p ref={ref} className={className}>
      {parts.map((part, pi) => {
        const words = part.text.split(' ').filter(Boolean);
        const firstIdx = wordIdx;
        const inner = words.map((w, wi) => {
          const idx = wordIdx++;
          return (
            <span
              key={`${pi}-${wi}`}
              className="inline-block"
              style={{
                opacity: active ? 1 : 0,
                transform: active ? 'none' : 'translateY(0.5em)',
                filter: active ? 'blur(0)' : 'blur(4px)',
                transition: reduce
                  ? 'none'
                  : `opacity .6s ${idx * stagger}ms var(--ease-out-expo), transform .6s ${idx * stagger}ms var(--ease-out-expo), filter .6s ${idx * stagger}ms var(--ease-out-expo)`,
              }}
            >
              {w}
              {wi < words.length - 1 ? ' ' : ''}
            </span>
          );
        });

        if (!part.mark) {
          return (
            <span key={pi}>
              {inner}
              {pi < parts.length - 1 ? ' ' : ''}
            </span>
          );
        }

        const markDelay = (firstIdx + words.length) * stagger + 120;
        return (
          <span
            key={pi}
            className="mark-sweep"
            style={{
              backgroundSize: active ? '100% 42%' : '0% 42%',
              transition: reduce
                ? 'none'
                : `background-size .55s ${markDelay}ms var(--ease-out-expo)`,
            }}
          >
            {inner}
            {pi < parts.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </p>
  );
}
