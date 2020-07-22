import React from "react";
import CartList from "../components/CartList";
// import { CartItem } from "../models/Cart";
import { useQuery } from "@apollo/client";
// import { GetCart } from "../operations/__generated__/GetCart";
import { GET_CART } from "../operations/queries/getCart";

const CartListContainer = () => {
  const {
    loading: isCartLoading,
    data: cartConnection,
    error: cartError,
  } = useQuery(GET_CART);
  // } = useQuery<GetCart>(GET_CART);

  if (isCartLoading) {
    return <div>Loading...</div>;
  }

  if (cartError) {
    return <div>An error occurred {JSON.stringify(cartError)}</div>;
  }

  if (!cartConnection) {
    return <div>None</div>;
  }

  return <CartList items={cartConnection.cart.items} />;
};

export default CartListContainer;
