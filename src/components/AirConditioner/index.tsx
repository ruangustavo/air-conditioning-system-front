import { Power } from "@phosphor-icons/react";
import styles from "./styles.module.css";

import { MouseEventHandler, useState } from "react";
import axios from "axios";
import { API_AIR_CONDITIONERS } from "../../utils/constants";

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
    <article
      className={`${styles.container} ${
        airConditionerState
          ? styles["container--toggled"]
          : styles["container--untoggled"]
      }`}
    >
      <div className={styles.room}>
        <h2>{`Ar-condicionado ${id}`}</h2>
        <button onClick={handleAirConditionerState}>
          <Power className={styles.room__powerIcon} size={32} />
        </button>
      </div>
      <p>{`Ar-condicionado da marca "${brand}" e modelo "${model}".`}</p>
    </article>
  );
}
