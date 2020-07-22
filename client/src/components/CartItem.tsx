import React from "react";
import * as CartModel from "../models/Cart";
import { useDeleteCartItem } from "../operations/mutations/deleteCartItem";

type Props = {
  item: CartModel.CartItem;
  deleteItem: ReturnType<typeof useDeleteCartItem>["mutate"];
  updateItemCount: (id: number, amount: number) => void;
};

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

const CartItem: React.FC<Props> = ({ item, deleteItem, updateItemCount }) => {
  return (
    <li>
      <div className="view">
        <label style={{ padding: "15px" }}>{item.title}</label>

        <button
          style={{ ...buttonStyles, right: "90px" }}
          onClick={() => updateItemCount(item.id, -1)}
        >
          +
        </button>
        <button
          style={{ ...buttonStyles, right: "50px" }}
          onClick={() => updateItemCount(item.id, 1)}
        >
          -
        </button>

        <button style={{ ...buttonStyles, right: "10px" }} onClick={deleteItem}>
          x
        </button>
      </div>
    </li>
  );
};

export default CartItem;
