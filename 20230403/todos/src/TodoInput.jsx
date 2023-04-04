import React, { useRef, useState } from "react";
import { useTodoDispatch } from "./todos";
import styled from "styled-components";

function TodoInput() {
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const [edit, setEdit] = useState(false);

  const dispatch = useTodoDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      dispatch({ type: "CREATE_TODO", text: text });
      inputRef.current.focus();
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        {edit && (
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            ref={inputRef}
            autoFocus
          />
        )}
        <button>{edit ? "Submit" : "Add"}</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  border-top: 1px solid #000;
  form {
    input {
      padding: 5px;
      gap: 10px;
      width: 100%;
      height: 25px;

      border: 1px solid #000;
      border-radius: 4px;
    }
  }

  button {
    padding: 5px 10px;
    width: 100%;
    height: 25px;

    background-color: rgba(29, 133, 255, 0.5);
    border-radius: 4px;
    border: none;
    color: #fff;
    font-weight: 700;
    font-size: 12px;
  }
`;

export default React.memo(TodoInput);
