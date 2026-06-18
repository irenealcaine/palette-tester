import styles from './FormsDemo.module.css';

export default function FormsDemo() {
  return (
    <div className={styles.demo}>
      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>Correo electrónico</span>
          <input type="email" className={styles.input} placeholder="usuario@ejemplo.com" />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Nombre</span>
          <input type="text" className={styles.input} placeholder="Ana Martínez" />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>Rol</span>
          <select className={styles.select}>
            <option>Selecciona un rol</option>
            <option>Admin</option>
            <option>Editor</option>
            <option>Usuario</option>
          </select>
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Mensaje</span>
          <textarea className={styles.textarea} rows={3} placeholder="Escribe tu mensaje aquí..." />
        </label>
      </div>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Intereses</legend>
        <div className={styles.checkGroup}>
          {['Diseño', 'Desarrollo', 'Marketing', 'Data'].map(l => (
            <label key={l} className={styles.checkLabel}>
              <input type="checkbox" className={styles.checkbox} />
              <span>{l}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Plan</legend>
        <div className={styles.radioGroup}>
          {['Básico', 'Pro', 'Enterprise'].map(l => (
            <label key={l} className={styles.radioLabel}>
              <input type="radio" name="plan" className={styles.radio} />
              <span>{l}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={styles.buttons}>
        <button className={styles.btnPrimary}>Guardar cambios</button>
        <button className={styles.btnSecondary}>Cancelar</button>
        <button className={styles.btnOutline}>Vista previa</button>
      </div>
    </div>
  );
}
