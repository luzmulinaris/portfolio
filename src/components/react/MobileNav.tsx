import { useEffect, useId, useRef, useState } from 'react';

export interface NavLink {
  href: string;
  label: string;
}

interface Props {
  links: NavLink[];
  openLabel: string;
  closeLabel: string;
  email: string;
  langLinks: { code: string; label: string; href: string; active: boolean }[];
}

export default function MobileNav({
  links,
  openLabel,
  closeLabel,
  email,
  langLinks,
}: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const prevOpen = useRef(false);

  // Body scroll lock + Escape to close.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Move focus into the dialog on open; restore it to the trigger on close.
  useEffect(() => {
    if (open) {
      const first = panelRef.current?.querySelector<HTMLElement>('a[href], button');
      (first ?? panelRef.current)?.focus();
    } else if (prevOpen.current) {
      triggerRef.current?.focus();
    }
    prevOpen.current = open;
  }, [open]);

  // Trap Tab within the open menu (trigger "Close" + panel contents).
  const onTrapKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !open) return;
    const focusables = rootRef.current?.querySelectorAll<HTMLElement>('a[href], button');
    if (!focusables || focusables.length === 0) return;
    const first = focusables[0]!;
    const last = focusables[focusables.length - 1]!;
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div className="md:hidden" ref={rootRef} onKeyDown={onTrapKeyDown}>
      <button
        type="button"
        ref={triggerRef}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="eyebrow relative z-[60] inline-flex items-center gap-2 text-ink"
      >
        <span>{open ? closeLabel : openLabel}</span>
        <span className="relative grid h-3.5 w-5 place-items-center">
          <span
            className="absolute h-[2px] w-5 bg-current transition-transform duration-300"
            style={{ transform: open ? 'rotate(45deg)' : 'translateY(-4px)' }}
          />
          <span
            className="absolute h-[2px] w-5 bg-current transition-transform duration-300"
            style={{ transform: open ? 'rotate(-45deg)' : 'translateY(4px)' }}
          />
        </span>
      </button>

      <div
        id={panelId}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={openLabel}
        tabIndex={-1}
        hidden={!open}
        className="fixed inset-0 z-50 flex flex-col bg-cream px-6 pb-10 pt-24 outline-none"
        style={{
          transition: 'opacity .35s ease',
          opacity: open ? 1 : 0,
        }}
      >
        <nav className="flex flex-1 flex-col justify-center gap-1" aria-label="Mobile">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-6xl uppercase leading-[0.95] text-ink transition-colors hover:text-pink"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'none' : 'translateY(1rem)',
                transition: `opacity .5s ${120 + i * 70}ms, transform .5s ${120 + i * 70}ms`,
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto flex items-end justify-between border-t border-line pt-6">
          <a href={`mailto:${email}`} className="mono text-sm link-underline">
            {email}
          </a>
          <div className="flex gap-3">
            {langLinks.map((l) => (
              <a
                key={l.code}
                href={l.href}
                className="eyebrow"
                aria-current={l.active ? 'true' : undefined}
                style={{ color: l.active ? 'var(--color-pink-ink)' : undefined }}
              >
                {l.code.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
