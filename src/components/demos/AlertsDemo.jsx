import styles from './AlertsDemo.module.css';

const ALERTS = [
  {
    type: 'info',
    title: 'Información',
    message: 'Tu suscripción se renovará automáticamente en 7 días.',
  },
  {
    type: 'success',
    title: 'Operación exitosa',
    message: 'Los cambios han sido guardados correctamente.',
  },
  {
    type: 'warning',
    title: 'Atención',
    message: 'Quedan menos de 10 proyectos disponibles en tu plan.',
  },
  {
    type: 'error',
    title: 'Error',
    message: 'No se pudo conectar con el servidor. Intenta de nuevo.',
  },
];

export default function AlertsDemo() {
  return (
    <div className={styles.demo}>
      {ALERTS.map(a => (
        <div key={a.type} className={`${styles.alert} ${styles[a.type]}`}>
          <span className={styles.icon}>
            {a.type === 'info' && 'ℹ'}
            {a.type === 'success' && '✓'}
            {a.type === 'warning' && '⚠'}
            {a.type === 'error' && '✕'}
          </span>
          <div>
            <span className={styles.alertTitle}>{a.title}</span>
            <p className={styles.alertMsg}>{a.message}</p>
          </div>
        </div>
      ))}

      <div className={styles.badges}>
        <span className={styles.badge}>Nuevo</span>
        <span className={styles.badge}>Popular</span>
        <span className={styles.badge}>Beta</span>
        <span className={styles.badge}>Próximamente</span>
      </div>
    </div>
  );
}
