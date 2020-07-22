import React from "react";
import MainSection from "../components/MainSection";
import { useQuery } from "@apollo/client";
import { GET_CART } from "../operations/queries/getCart";
// import { GetCart } from "../operations/__generated__/GetCart";

export default function Main() {
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

  return <MainSection itemsCount={cartConnection.cart.items.length} />;
}
