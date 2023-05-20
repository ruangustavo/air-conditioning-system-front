import styled from "styled-components";

export const InputField = styled.input`
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 12px 16px;
  border-radius: 8px;

  &::placeholder {
    color: #abadaf;
    font-size: 14px;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
