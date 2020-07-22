/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCart
// ====================================================

export interface GetCart_getCart_cart_items {
  __typename: "CartItem";
  id: number;
  title: string;
}

export interface GetCart_getCart_cart {
  __typename: "Cart";
  items: GetCart_getCart_cart_items[];
}

export interface GetCart_getCart {
  __typename: "CartResult";
  cart: GetCart_getCart_cart;
  success: boolean;
}

export interface GetCart {
  getCart: GetCart_getCart;
}

export interface GetCartVariables {
  id: number;
}
