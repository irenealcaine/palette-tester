import PresetSelector from './PresetSelector';
import ColorControls from './ColorControls';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.section}>
        <h3 className={styles.heading}>Paletas</h3>
        <PresetSelector />
      </div>
      <div className={styles.section}>
        <h3 className={styles.heading}>Colores</h3>
        <ColorControls />
      </div>
    </aside>
  );
}
