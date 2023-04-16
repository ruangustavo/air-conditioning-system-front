import { House, MapPin } from "@phosphor-icons/react";
import styles from "./styles.module.css";
import { FormEvent } from "react";

export function Room() {
  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(`Form submitted: ${event.target}`);
  }

  return (
    <section className={styles.container}>
      <h2>Adicionar sala</h2>
      <form method="POST" onSubmit={handleFormSubmit}>
        <div className={styles.input}>
          <div className={styles.input__label}>
            <House size={24} />
            <label htmlFor="name">Nome da sala:</label>
          </div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o nome da sala..."
          />
        </div>
        <div className={styles.input}>
          <div className={styles.input__label}>
            <MapPin size={24} />
            <label htmlFor="number">Número da sala:</label>
          </div>
          <input
            type="number"
            id="number"
            name="number"
            placeholder="Digite o número da sala..."
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </section>
  );
}
