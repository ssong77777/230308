import styled from "styled-components";
import React from "react";
import { useTodoState } from "./todos";

function TodoHeader() {
  const todos = useTodoState();
  const undoneCount = todos.filter((todo) => !todo.done).length;
  const dateStr = new Date().toLocaleDateString("ko-KR", { dateStyle: "long" });

  return (
    <Container>
      <h2>{dateStr}</h2>
      <p>해야할 일 : {undoneCount}</p>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 10px;
  gap: 10px;
  border-bottom: 1px solid #000;
`;

export default React.memo(TodoHeader);
