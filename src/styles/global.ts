import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: #f0f2f5;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    height: 100vh;
  }

  button,
  input,
  select {
    font-family: "Inter", sans-serif;
    all: unset;
  }

  button::placeholder,
  input::placeholder {
    font-family: "Inter", sans-serif;
  }

  main {
    margin: 0 64px;
    min-height: calc(100vh - 128px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
