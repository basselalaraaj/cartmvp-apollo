import React from "react";
import CartItem from "../containers/CartItem";
import { CartItem as CartItemModel } from "../models/Cart";

const CartList = ({ items }: any) => (
  <ul className="todo-list">
    {items.map((item: CartItemModel) => (
      <CartItem key={item.id} item={item} />
    ))}
  </ul>
);

export default CartList;
