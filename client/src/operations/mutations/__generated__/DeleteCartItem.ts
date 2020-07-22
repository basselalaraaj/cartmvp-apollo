/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteCartItem
// ====================================================

export interface DeleteCartItem_deleteCartItem {
  __typename: "DeleteCartItemResult";
  cartItem: number;
  success: boolean;
}

export interface DeleteCartItem {
  deleteCartItem: DeleteCartItem_deleteCartItem;
}

export interface DeleteCartItemVariables {
  id: number;
}
