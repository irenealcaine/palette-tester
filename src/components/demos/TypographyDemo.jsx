import styles from './TypographyDemo.module.css';

export default function TypographyDemo() {
  return (
    <div className={styles.demo}>
      <h1>Heading 1 — Título principal de la página</h1>
      <h2>Heading 2 — Título de sección importante</h2>
      <h3>Heading 3 — Subtítulo de sección</h3>
      <h4>Heading 4 — Título de card o grupo</h4>

      <p className={styles.lead}>
        Este es un párrafo de introducción o lead. Se usa para resumir el contenido
        principal y debe tener buena legibilidad sobre el fondo de la página.
      </p>

      <p>
        Párrafo normal de cuerpo de texto. Aquí vemos cómo se comporta el color de
        texto sobre el fondo principal. La tipografía debe ser cómoda de leer incluso
        en bloques largos. Este texto se usa para probar el contraste entre{' '}
        <code>--color-text</code> y <code>--color-bg</code>.
      </p>

      <p>
        Un <a href="#">enlace de ejemplo</a> dentro de un párrafo, y{' '}
        <a href="#" className={styles.visited}>un enlace visitado</a> para probar
        estilos de navegación. También hay{' '}
        <strong>texto en negrita</strong> y <em>texto en cursiva</em>.
      </p>

      <div className={styles.codeBlock}>
        <pre>{`const color = {
  bg: "var(--color-bg)",
  text: "var(--color-text)",
  light: "var(--color-light)",
  dark: "var(--color-dark)",
};`}</pre>
      </div>

      <blockquote className={styles.blockquote}>
        "El contraste es la base de la legibilidad. Un buen diseño usa el color para
        guiar la atención sin sacrificar la accesibilidad."
        <cite>— Principios de Diseño</cite>
      </blockquote>
    </div>
  );
}
