import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { theme } from "./Styles/Theme";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledApp>
        <TodoList />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
