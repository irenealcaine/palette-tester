import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.logo}
        aria-hidden="true"
      >
        <path d="M14 2L26 14L14 26L2 14L14 2Z" fill="var(--color-dark)" />
        <path d="M14 7L21 14L14 21L7 14L14 7Z" fill="var(--color-bg)" />
      </svg>
      <h1 className={styles.title}>Palette Tester</h1>
    </header>
  );
}
