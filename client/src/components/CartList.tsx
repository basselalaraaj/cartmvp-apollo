import React from "react";
import CartItem from "../containers/CartItem";
import { Todo } from "../models/Todos";

const CartList = ({ filteredTodos }: any) => (
  <ul className="todo-list">
    {filteredTodos.map((todo: Todo) => (
      <CartItem key={todo.id} todo={todo} />
    ))}
  </ul>
);

export default CartList;
