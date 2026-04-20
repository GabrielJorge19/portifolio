import { useEffect, useState } from 'react';
import { useLanguages } from '@/context/translationsContext';

export function LanguageSwitch() {
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage } = useLanguages();

  useEffect(() => setMounted(true), []);

  const current = language ?? 'pt';
  const isPt = current === 'pt';

  return (
    <button
      type="button"
      aria-label="Toggle language"
      onClick={() => setLanguage(isPt ? 'en' : 'pt')}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 text-foreground shadow-sm transition hover:bg-card/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
    >
      {mounted ? (
        <span className="text-sm font-medium">{isPt ? 'PT' : 'EN'}</span>
      ) : (
        <span className="text-sm font-medium opacity-0">PT</span>
      )}
    </button>
  );
}