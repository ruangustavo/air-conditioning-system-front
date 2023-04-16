import { AirConditioner } from "../../components/AirConditioner";
import styles from "./styles.module.css";

export function Home() {
  const airConditioners = [
    {
      id: 1,
      room: "Sala 1",
      toggled: false,
    },
    {
      id: 2,
      room: "Sala 2",
      toggled: true,
    },
    {
      id: 3,
      room: "Sala 3",
      toggled: false,
    },
    {
      id: 4,
      room: "Sala 4",
      toggled: true,
    },
    {
      id: 5,
      room: "Sala 5",
      toggled: false,
    },
    {
      id: 6,
      room: "Sala 6",
      toggled: true,
    },
  ];

  return (
    <section className={styles.container}>
      {airConditioners.map((airConditioner) => {
        return (
          <AirConditioner
            key={airConditioner.id}
            room={airConditioner.room}
            toggled={airConditioner.toggled}
          />
        );
      })}
    </section>
  );
}
