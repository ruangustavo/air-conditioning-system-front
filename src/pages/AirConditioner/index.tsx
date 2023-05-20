import { Fan } from "@phosphor-icons/react";
import axios from "axios";
import { FormEvent } from "react";
import { useMutation } from "react-query";
import { FormContainer } from "@/components/atoms/FormContainer";
import { InputButton } from "@/components/atoms/InputButton";
import { InputContainer } from "@/components/atoms/InputContainer";
import { InputField } from "@/components/atoms/InputField";
import { InputLabel } from "@/components/atoms/InputLabel";
import { queryClient } from "@/services/queryClient";
import { API_AIR_CONDITIONERS } from "@/utils/constants";

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
    <FormContainer method="POST" onSubmit={handleFormSubmit}>
      <h2>Adicionar ar-condicionado</h2>
      <InputContainer>
        <InputLabel>
          <Fan size={24} />
          <label htmlFor="brand">Marca do ar-condicionado:</label>
        </InputLabel>
        <InputField
          type="text"
          id="brand"
          name="brand"
          placeholder="Digite a marca do ar-condicionado..."
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          <Fan size={24} />
          <label htmlFor="model">Modelo do ar-condicionado:</label>
        </InputLabel>
        <InputField
          type="text"
          id="model"
          name="model"
          placeholder="Digite o modelo do ar-condicionado..."
        />
      </InputContainer>
      <small>Observação: o ar-condicionado deve estar desligado.</small>
      <InputButton type="submit">Adicionar</InputButton>
    </FormContainer>
  );
}
