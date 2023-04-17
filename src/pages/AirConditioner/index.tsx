import { Fan } from "@phosphor-icons/react";
import axios from "axios";
import { FormEvent } from "react";
import { useMutation } from "react-query";
import { Form } from "../../components/Form";
import styles from "../../components/Form/styles.module.css";
import { queryClient } from "../../services/queryClient";
import { API_AIR_CONDITIONERS } from "../../utils/constants";

export function AirConditioner() {
  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    roomMutation.mutate(new FormData(event.currentTarget));
    queryClient.invalidateQueries("airConditioners");
  }

  const roomMutation = useMutation(async (formData: FormData) => {
    const formDataObject = Object.fromEntries(formData);
    const { data } = await axios.post(API_AIR_CONDITIONERS, formDataObject);
    return data;
  });

  return (
    <Form>
      <h2>Adicionar ar-condicionado</h2>
      <form method="POST" onSubmit={handleFormSubmit}>
        <div className={styles.input}>
          <div className={styles.input__label}>
            <Fan size={24} />
            <label htmlFor="brand">Marca do ar-condicionado:</label>
          </div>
          <input
            type="text"
            id="brand"
            name="brand"
            placeholder="Digite a marca do ar-condicionado..."
          />
        </div>
        <div className={styles.input}>
          <div className={styles.input__label}>
            <Fan size={24} />
            <label htmlFor="model">Modelo do ar-condicionado:</label>
          </div>
          <input
            type="text"
            id="model"
            name="model"
            placeholder="Digite o modelo do ar-condicionado..."
          />
        </div>
        <small>Observação: o ar-condicionado deve estar desligado.</small>
        <button type="submit">Adicionar</button>
      </form>
    </Form>
  );
}
