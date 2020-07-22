/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteCartItem
// ====================================================

export interface DeleteCartItem_deleteCartItem_cart_items {
  __typename: "CartItem";
  id: number;
  title: string;
}

export interface DeleteCartItem_deleteCartItem_cart {
  __typename: "Cart";
  items: DeleteCartItem_deleteCartItem_cart_items[];
}

export interface DeleteCartItem_deleteCartItem {
  __typename: "CartResult";
  cart: DeleteCartItem_deleteCartItem_cart;
  success: boolean;
}

export interface DeleteCartItem {
  deleteCartItem: DeleteCartItem_deleteCartItem;
}

export interface DeleteCartItemVariables {
  id: number;
}
