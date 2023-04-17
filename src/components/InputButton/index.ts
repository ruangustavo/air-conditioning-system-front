import styled from "styled-components";

export const InputButton = styled.button`
  background-color: ${({ theme }) => theme.colors.red};
  padding: 12px 16px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  text-align: center;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: #bb3944;
    transition: 0.2s;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #a39090;
  }
`;
