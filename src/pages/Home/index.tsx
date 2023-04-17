import axios from "axios";
import { useQuery } from "react-query";
import { AirConditioner } from "../../components/AirConditioner";
import { API_AIR_CONDITIONERS, API_URL } from "../../utils/constants";
import styles from "./styles.module.css";

interface AirConditionerResponse {
  id: number;
  brand: string;
  model: string;
}

export function Home() {
  async function fetchAirConditioners() {
    const { data } = await axios.get(API_AIR_CONDITIONERS);
    return data;
  }

  const { data: airConditioners, isLoading } = useQuery<
    AirConditionerResponse[]
  >("airConditioners", fetchAirConditioners, {
    staleTime: 60 * 1000,
  });

  if (isLoading) {
    return <p>Carregando ar-condicionados...</p>;
  }

  return (
    <section className={styles.container}>
      {airConditioners?.map((airConditioner) => (
        <AirConditioner
          key={airConditioner.id}
          id={airConditioner.id}
          brand={airConditioner.brand}
          model={airConditioner.model}
        />
      ))}
    </section>
  );
}
