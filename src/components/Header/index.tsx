import { LinkContainer, LinkItem, Title, Container } from "./styles";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <Title>
        <Link to="/">Projeto IOT</Link>
      </Title>
      <nav>
        <LinkContainer>
          <LinkItem>
            <Link to="/room">Salas</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/air-conditioners">Ar-condicionados</Link>
          </LinkItem>
        </LinkContainer>
      </nav>
    </Container>
  );
}
