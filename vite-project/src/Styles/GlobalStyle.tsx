// src/styles/GlobalStyle.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    background-color: #f5f5f5;
    color: ${({ theme }) => theme.colors.text};
  }
  input {
     font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, li {
    list-style: none;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: inherit;
  }
`;
