import { presets } from '../presets';
import { usePalette } from '../context/PaletteContext';
import styles from './PresetSelector.module.css';

export default function PresetSelector() {
  const { applyPreset } = usePalette();

  return (
    <div className={styles.selector}>
      <div className={styles.buttons}>
        {presets.map(p => (
          <button
            key={p.name}
            className={styles.presetBtn}
            onClick={() => applyPreset(p)}
            title={`${p.name}: ${p.bg} / ${p.text} / ${p.light} / ${p.dark}`}
          >
            <span className={styles.swatches}>
              {[p.bg, p.text, p.light, p.dark].map((c, i) => (
                <span key={i} className={styles.dot} style={{ backgroundColor: c }} />
              ))}
            </span>
            {p.name}
          </button>
        ))}
      </div>
    </div>
  );
}
