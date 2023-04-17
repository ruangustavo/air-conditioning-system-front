import styled from "styled-components";

export const Container = styled.article<{ isToggled: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 300px;
  height: 150px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px 4px 0 0;
  border-bottom: 6px solid
    ${({ isToggled, theme }) =>
      isToggled ? theme.colors.green : theme.colors.red};

  p {
    line-height: 1.6;
    word-wrap: break-word;
    overflow-y: auto;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonToggle = styled.button`
  svg {
    cursor: pointer;

    &:hover {
      scale: 1.1;
      transition: 0.2s;
    }
  }
`;
