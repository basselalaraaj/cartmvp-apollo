/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CartDetailsFragment
// ====================================================

export interface CartDetailsFragment_items {
  __typename: "CartItem";
  id: number;
  title: string;
}

export interface CartDetailsFragment {
  __typename: "Cart";
  items: CartDetailsFragment_items[];
}
