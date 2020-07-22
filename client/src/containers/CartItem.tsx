import React from "react";
import CartItem from "../components/CartItem";
import { useDeleteCartItem } from "../operations/mutations/deleteCartItem";

const CartItemContainer: React.FC<any> = ({ todo }) => {
  const { mutate: deleteTodo } = useDeleteCartItem();

  return (
    <CartItem
      todo={todo}
      deleteTodo={deleteTodo}
      updateTodoCount={console.log}
    />
  );
};

export default CartItemContainer;
