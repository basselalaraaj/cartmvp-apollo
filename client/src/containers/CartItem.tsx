import React from "react";
import CartItem from "../components/CartItem";
import { useDeleteTodo } from "../operations/mutations/deleteTodo";

const CartItemContainer: React.FC<any> = ({ todo }) => {
  const { mutate: deleteTodo } = useDeleteTodo();

  return (
    <CartItem
      todo={todo}
      deleteTodo={deleteTodo}
      updateTodoCount={console.log}
    />
  );
};

export default CartItemContainer;
