import styles from './TablesDemo.module.css';

const ROWS = [
  { name: 'Lucía Herrera', email: 'lucia@ejemplo.com', role: 'Admin', status: 'Activo', amount: '$2,400' },
  { name: 'Carlos Ruiz', email: 'carlos@ejemplo.com', role: 'Editor', status: 'Inactivo', amount: '$1,800' },
  { name: 'María Torres', email: 'maria@ejemplo.com', role: 'Usuario', status: 'Activo', amount: '$950' },
  { name: 'José Vega', email: 'jose@ejemplo.com', role: 'Admin', status: 'Activo', amount: '$3,200' },
  { name: 'Elena Paz', email: 'elena@ejemplo.com', role: 'Editor', status: 'Pendiente', amount: '$1,100' },
];

export default function TablesDemo() {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r, i) => (
            <tr key={i}>
              <td>{r.name}</td>
              <td>{r.email}</td>
              <td>
                <span className={styles.role}>{r.role}</span>
              </td>
              <td>
                <span className={`${styles.status} ${styles[r.status.toLowerCase()]}`}>
                  {r.status}
                </span>
              </td>
              <td className={styles.amount}>{r.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
