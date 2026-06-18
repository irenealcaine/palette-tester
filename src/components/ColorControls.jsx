import { usePalette } from '../context/PaletteContext';
import styles from './ColorControls.module.css';

const LABELS = {
  bg: 'Fondo',
  text: 'Texto',
  light: 'Color 1',
  dark: 'Color 2',
};

export default function ColorControls() {
  const { bg, text, light, dark, setColor, swapPair } = usePalette();
  const colors = { bg, text, light, dark };

  return (
    <div>
      {Object.entries(colors).map(([name, value]) => (
        <label key={name} className={styles.field}>
          <span className={styles.label}>{LABELS[name]}</span>
          <span className={styles.row}>
            <span className={styles.swatch} style={{ backgroundColor: value }}>
              <input
                type="color"
                className={styles.picker}
                value={value}
                onChange={e => setColor(name, e.target.value)}
              />
            </span>
            <input
              type="text"
              className={styles.hexInput}
              value={value}
              onChange={e => setColor(name, e.target.value)}
            />
          </span>
        </label>
      ))}
      <button className={styles.swapBtn} onClick={swapPair} title="Intercambia Fondo↔Texto y Color1↔Color2">
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M1 10L4 13M4 13L7 10M4 13V1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13 4L10 1M10 1L7 4M10 1V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Intercambiar
      </button>
    </div>
  );
}
