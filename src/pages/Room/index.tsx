import { api } from "@/api";
import { FormContainer } from "@/components/atoms/FormContainer";
import { InputButton } from "@/components/atoms/InputButton";
import { InputContainer } from "@/components/atoms/InputContainer";
import { InputField } from "@/components/atoms/InputField";
import { InputLabel } from "@/components/atoms/InputLabel";
import { House, MapPin } from "@phosphor-icons/react";
import { FormEvent } from "react";

export function Room() {
  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    const data = new FormData(event.currentTarget as HTMLFormElement);

    const createRoomResponse = await api.post("rooms", {
      name: data.get("name"),
      number: data.get("number"),
    });
    
    return createRoomResponse;
  }

  return (
    <FormContainer method="POST" onSubmit={handleFormSubmit}>
      <h2>Adicionar sala</h2>
      <InputContainer>
        <InputLabel>
          <House size={24} />
          <label htmlFor="name">Nome da sala:</label>
        </InputLabel>
        <InputField
          type="text"
          id="name"
          name="name"
          placeholder="Digite o nome da sala..."
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          <MapPin size={24} />
          <label htmlFor="number">Número da sala:</label>
        </InputLabel>
        <InputField
          type="number"
          id="number"
          name="number"
          placeholder="Digite o número da sala..."
        />
      </InputContainer>
      <InputButton type="submit" disabled>
        Adicionar
      </InputButton>
    </FormContainer>
  );
}
