import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <h1>Projeto IOT</h1>
      <nav>
        <ul>
          <li>Ar-condicionados</li>
          <li>Salas</li>
        </ul>
      </nav>
    </header>
  );
}
