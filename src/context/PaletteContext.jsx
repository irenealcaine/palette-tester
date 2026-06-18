import { createContext, useContext, useState, useEffect } from 'react';

const PaletteContext = createContext(null);

export function PaletteProvider({ children }) {
  const [colors, setColors] = useState({
    bg: '#FFFFFF',
    text: '#1A1A2E',
    light: '#F0F0F5',
    dark: '#16213E',
  });

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-bg', colors.bg);
    root.style.setProperty('--color-text', colors.text);
    root.style.setProperty('--color-light', colors.light);
    root.style.setProperty('--color-dark', colors.dark);
  }, [colors]);

  const setColor = (name, value) => {
    setColors(prev => ({ ...prev, [name]: value }));
  };

  const swapPair = () => {
    setColors(prev => ({
      bg: prev.text,
      text: prev.bg,
      light: prev.dark,
      dark: prev.light,
    }));
  };

  const applyPreset = (preset) => {
    setColors({
      bg: preset.bg,
      text: preset.text,
      light: preset.light,
      dark: preset.dark,
    });
  };

  return (
    <PaletteContext.Provider value={{ ...colors, setColor, applyPreset, swapPair }}>
      {children}
    </PaletteContext.Provider>
  );
}

export function usePalette() {
  const ctx = useContext(PaletteContext);
  if (!ctx) throw new Error('usePalette must be used within PaletteProvider');
  return ctx;
}
