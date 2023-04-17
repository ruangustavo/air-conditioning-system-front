import { Power } from "@phosphor-icons/react";

import { MouseEventHandler, useState } from "react";
import axios from "axios";
import { API_AIR_CONDITIONERS } from "../../utils/constants";
import { ButtonToggle, Container, TitleContainer } from "./styles";

interface AirConditionerProps {
  id: number;
  brand: string;
  model: string;
}

export function AirConditioner({ id, brand, model }: AirConditionerProps) {
  const [airConditionerState, setAirConditionerState] = useState(false);

  const handleAirConditionerState: MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    event.preventDefault();
    setAirConditionerState(!airConditionerState);
    toggleAirConditionerState();
  };

  async function toggleAirConditionerState() {
    const data = { state: !airConditionerState };
    await axios
      .put(`${API_AIR_CONDITIONERS}/${id}/state`, data)
      .then((response) => {
        console.log(response);
      });
  }

  return (
    <Container isToggled={airConditionerState}>
      <TitleContainer>
        <h2>{`Ar-condicionado ${id}`}</h2>
        <ButtonToggle onClick={handleAirConditionerState}>
          <Power size={32} />
        </ButtonToggle>
      </TitleContainer>
      <p>{`Ar-condicionado da marca "${brand}" e modelo "${model}".`}</p>
    </Container>
  );
}
