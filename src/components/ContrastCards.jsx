import { usePalette } from '../context/PaletteContext';
import styles from './ContrastCards.module.css';

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

function linearize(c) {
  const s = c / 255;
  return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

function luminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b);
}

function contrastRatio(a, b) {
  const la = luminance(a);
  const lb = luminance(b);
  const lighter = Math.max(la, lb);
  const darker = Math.min(la, lb);
  return (lighter + 0.05) / (darker + 0.05);
}

const PAIRS = [
  { fg: 'text', bg: 'bg', label: 'Texto sobre fondo' },
  { fg: 'text', bg: 'light', label: 'Texto sobre claro' },
  { fg: 'bg', bg: 'dark', label: 'Fondo sobre oscuro' },
  { fg: 'dark', bg: 'bg', label: 'Oscuro sobre fondo' },
  { fg: 'dark', bg: 'light', label: 'Oscuro sobre claro' },
  { fg: 'text', bg: 'dark', label: 'Texto sobre oscuro' },
];

export default function ContrastCards() {
  const colors = usePalette();
  const { bg, text, light, dark } = colors;
  const map = { bg, text, light, dark };

  return (
    <div className={styles.grid}>
      {PAIRS.map(({ fg, bg: bgKey, label }) => {
        const fgColor = map[fg];
        const bgColor = map[bgKey];
        const ratio = contrastRatio(fgColor, bgColor);
        const aa = ratio >= 4.5;
        const aaa = ratio >= 7;

        return (
          <div key={label} className={styles.card}>
            <div
              className={styles.preview}
              style={{ backgroundColor: bgColor, color: fgColor }}
            >
              <span className={styles.sampleText}>Aa</span>
            </div>
            <div className={styles.info}>
              <span className={styles.label}>{label}</span>
              <span className={styles.ratio}>{ratio.toFixed(2)}:1</span>
              <div className={styles.badges}>
                {aa ? (
                  <span className={`${styles.badge} ${styles.aa}`}>AA</span>
                ) : (
                  <span className={`${styles.badge} ${styles.fail}`}>FAIL</span>
                )}
                {aaa ? (
                  <span className={`${styles.badge} ${styles.aaa}`}>AAA</span>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
