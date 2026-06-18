import styles from './CardsDemo.module.css';

const CARDS = [
  {
    title: 'Ana Martínez',
    subtitle: 'Diseñadora UX',
    body: '5 años de experiencia en producto digital. Especialista en accesibilidad y sistemas de diseño.',
    badge: 'Senior',
  },
  {
    title: 'Proyecto Nova',
    subtitle: 'Presupuesto Q4',
    body: 'Plataforma de análisis de datos en tiempo real. Equipo de 8 personas. Entregable marzo 2026.',
    badge: 'En curso',
  },
  {
    title: '$12,450',
    subtitle: 'Ingresos mensuales',
    body: '+23% vs mes anterior. 1,280 usuarios activos. Tasa de conversión: 4.2%.',
    badge: '+23%',
  },
];

export default function CardsDemo() {
  return (
    <div className={styles.grid}>
      {CARDS.map((c, i) => (
        <div key={i} className={styles.card}>
          <span className={styles.badge}>{c.badge}</span>
          <h3 className={styles.title}>{c.title}</h3>
          <span className={styles.subtitle}>{c.subtitle}</span>
          <p className={styles.body}>{c.body}</p>
        </div>
      ))}
    </div>
  );
}
