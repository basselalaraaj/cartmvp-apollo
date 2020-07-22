/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CartResultFragment
// ====================================================

export interface CartResultFragment_items {
  __typename: "CartItem";
  id: number;
  title: string;
}

export interface CartResultFragment {
  __typename: "Cart";
  items: CartResultFragment_items[];
}
