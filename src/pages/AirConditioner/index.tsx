import { Fan, House } from "@phosphor-icons/react";
import { FormEvent } from "react";
import { Form } from "../../components/Form";
import styles from "../../components/Form/styles.module.css";

export function AirConditioner() {
  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(`Form submitted: ${event.target}`);
  }

  return (
    <Form>
      <h2>Adicionar ar-condicionado</h2>
      <form method="POST" onSubmit={handleFormSubmit}>
        <div className={styles.input}>
          <div className={styles.input__label}>
            <House size={24} />
            <label htmlFor="name">Sala do ar-condicionado:</label>
          </div>
          <select name="room" id="room">
            <option value="1">Sala 1</option>
            <option value="2">Sala 2</option>
            <option value="3">Sala 3</option>
          </select>
        </div>
        <div className={styles.input}>
          <div className={styles.input__label}>
            <Fan size={24} />
            <label htmlFor="name">Nome do ar-condicionado:</label>
          </div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o nome do ar-condicionado..."
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </Form>
  );
}
