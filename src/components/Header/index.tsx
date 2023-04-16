import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link to="/">Projeto IOT</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/room">Salas</Link>
          </li>
          <li>
            <Link to="/air-conditioners">Ar-condicionados</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
