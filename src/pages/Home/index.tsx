import axios from "axios";
import { useQuery } from "react-query";
import { AirConditioner } from "@/components/molecules/AirConditioner";
import { api } from "@/api";
import { Container } from "@/pages/Home/styles";

interface AirConditionerResponse {
  id: number;
  brand: string;
  model: string;
}

export function Home() {
  async function fetchAirConditioners() {
    const { data } = await api.get('air-conditioners');
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
    <Container>
      {airConditioners?.map((airConditioner) => (
        <AirConditioner
          key={airConditioner.id}
          id={airConditioner.id}
          brand={airConditioner.brand}
          model={airConditioner.model}
        />
      ))}
    </Container>
  );
}
