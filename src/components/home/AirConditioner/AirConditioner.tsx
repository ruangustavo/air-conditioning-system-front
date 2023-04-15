import { Power } from "@phosphor-icons/react";
import styles from "./AirConditioner.module.css";

import { useState } from "react";

interface AirConditionerProps {
  room: string;
  toggled: boolean;
}

export function AirConditioner({ room, toggled }: AirConditionerProps) {
  const [airConditionerState, setAirConditionerState] = useState(toggled);

  function handleAirConditionerState() {
    setAirConditionerState(!airConditionerState);
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
        <h2>{room}</h2>
        <button onClick={handleAirConditionerState}>
          <Power className={styles.room__powerIcon} size={32} />
        </button>
      </div>
      <p>Ar-condicionado da sala 14.</p>
    </article>
  );
}
