import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 12px 64px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1.5rem;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const LinkContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`;

export const LinkItem = styled.li`
  list-style: none;

  a {
    color: inherit;
    text-decoration: none;
    letter-spacing: 0.05em;

    &:hover {
      color: ${({ theme }) => theme.colors.grey};
      transition: 0.2s;
    }
  }
`;
