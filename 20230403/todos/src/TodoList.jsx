import React, { useState } from "react";
import { useTodoDispatch, useTodoState } from "./todos";
import styled from "styled-components";

function TodoList() {
  const todos = useTodoState();

  const itemList = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);

  return (
    <div>
      <ul>{itemList}</ul>{" "}
    </div>
  );
}

function TodoItem({ todo: { text, done, id } }) {
  const dispatch = useTodoDispatch();
  const [disappear, setDisappear] = useState(false);

  return (
    <ItemBox onClick={() => dispatch({ type: "TOGGLE_TODO", id })}>
      <ContentWrapper disappear={disappear} done={done}>
        <span>{text}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setTimeout(() => {
              dispatch({ type: "REMOVE_TODO", id });
            }, 400);
            setDisappear(true);
          }}
        >
          삭제
        </button>
      </ContentWrapper>
    </ItemBox>
  );
}

const ItemBox = styled.li`
  border-bottom: 1px solid #000;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;

  span {
    text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  }

  button {
    padding: 5px 10px;
    background-color: rgba(255, 0, 0, 0.5);
    border-radius: 4px;
    border: none;

    font-weight: 700;
    font-size: 12px;
    color: #fff;
  }

  button:hover {
    opacity: 0.5;
  }
`;

export default React.memo(TodoList);
