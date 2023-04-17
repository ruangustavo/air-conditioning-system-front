import { House, MapPin } from "@phosphor-icons/react";
import { FormEvent } from "react";
import { Form } from "../../components/Form";
import styles from "../../components/Form/styles.module.css";
import axios from "axios";

export function Room() {
  axios.defaults.baseURL = "http://localhost:3333";

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    const data = new FormData(event.currentTarget as HTMLFormElement);
    const response = axios.post("rooms", {
      name: data.get("name"),
      number: data.get("number"),
    });
    return response;
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
        <button type="submit" disabled>
          Adicionar
        </button>
      </form>
    </Form>
  );
}
