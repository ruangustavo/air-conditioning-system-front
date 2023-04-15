import { AirConditioner } from "../AirConditioner/AirConditioner";

const airConditioners = [
  {
    id: 1,
    room: "Sala 14",
    toggled: false,
  },
];

export function App() {
  return (
    <main>
      {airConditioners.map((airConditioner) => {
        return (
          <AirConditioner
            key={airConditioner.id}
            room={airConditioner.room}
            toggled={airConditioner.toggled}
          />
        );
      })}
    </main>
  );
}
