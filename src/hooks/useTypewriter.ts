import { useState, useEffect } from 'react';

export function useTypewriter(text: string, speed: number = 50, enabled: boolean = true) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!enabled) {
      setDisplayedText(text);
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, enabled]);

  return displayedText;
}
