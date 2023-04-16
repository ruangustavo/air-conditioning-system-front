import { House, MapPin } from "@phosphor-icons/react";
import { FormEvent } from "react";
import { Form } from "../../components/Form";
import styles from "../../components/Form/styles.module.css";

export function Room() {
  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(`Form submitted: ${event.target}`);
  }

  return (
    <Form>
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
    </Form>
  );
}
