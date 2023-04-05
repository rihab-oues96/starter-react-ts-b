import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);
  const setMode = ({ mode }: { mode: string }) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode({ mode: 'dark' });
    } else {
      setMode({ mode: 'light' });
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      !localTheme
    ) {
      setMode({ mode: 'dark' });
    } else if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode({ mode: 'light' });
    }

    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
