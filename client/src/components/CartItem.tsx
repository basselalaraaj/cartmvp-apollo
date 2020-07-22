import React from "react";

type Props = any;

const buttonStyles: any = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  width: "40px",
  height: "40px",
  margin: "auto 0",
  fontSize: "30px",
  color: "#cc9a9a",
  marginBottom: "11px",
  cursor: "pointer",
};

const CartItem: React.FC<Props> = ({ todo, deleteTodo, updateTodoCount }) => {
  return (
    <li>
      <div className="view">
        <label style={{ padding: "15px" }}>{todo.text}</label>

        <button
          style={{ ...buttonStyles, right: "90px" }}
          onClick={() => updateTodoCount(todo.id, -1)}
        >
          +
        </button>
        <button
          style={{ ...buttonStyles, right: "50px" }}
          onClick={() => updateTodoCount(todo.id, 1)}
        >
          -
        </button>

        <button
          style={{ ...buttonStyles, right: "10px" }}
          onClick={() => deleteTodo(todo.id)}
        >
          x
        </button>
      </div>
    </li>
  );
};

export default CartItem;
