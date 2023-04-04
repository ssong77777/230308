import styled, { createGlobalStyle } from "styled-components";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoProvider from "./todos";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}
`;

export default function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <Container>
        <Todos>
          <TodoHeader />
          <TodoList />
          <TodoInput />
        </Todos>
      </Container>
    </TodoProvider>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const Todos = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;

  width: 350px;
  height: 700px;
  border: 1px solid #000;

  overflow: hidden;
`;
