import React from "react";
import CartItem from "../components/CartItem";
import { useDeleteCartItem } from "../operations/mutations/deleteCartItem";

const CartItemContainer: React.FC<any> = ({ item }) => {
  const { mutate: deleteItem } = useDeleteCartItem();

  return (
    <CartItem
      item={item}
      deleteItem={deleteItem}
      updateItemCount={console.log}
    />
  );
};

export default CartItemContainer;
