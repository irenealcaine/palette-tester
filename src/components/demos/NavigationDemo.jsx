import styles from './NavigationDemo.module.css';

const LINKS = ['Dashboard', 'Proyectos', 'Equipo', 'Informes', 'Ajustes'];

export default function NavigationDemo() {
  return (
    <div className={styles.demo}>
      <nav className={styles.navbar}>
        <span className={styles.logo}>Logo</span>
        <div className={styles.navLinks}>
          {LINKS.map(l => (
            <a key={l} href="#" className={styles.navLink}>
              {l}
            </a>
          ))}
        </div>
        <div className={styles.user}>
          <span className={styles.avatar}>AM</span>
          <span className={styles.userName}>Ana Martínez</span>
        </div>
      </nav>

      <div className={styles.sidebarLayout}>
        <aside className={styles.sidebar}>
          {['Dashboard', 'Proyectos', 'Tareas', 'Calendario', 'Reportes'].map(l => (
            <a key={l} href="#" className={styles.sidebarLink}>
              {l}
            </a>
          ))}
        </aside>
        <div className={styles.sidebarContent}>
          <p>
            Panel lateral con fondo <code>--color-light</code> y texto{' '}
            <code>--color-text</code>. El navbar usa fondo{' '}
            <code>--color-dark</code> con texto <code>--color-bg</code>.
          </p>
        </div>
      </div>
    </div>
  );
}
