import { useCallback } from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag.macro";
import * as DeleteCartItemTypes from "./__generated__/DeleteCartItem";
import { CartFragments } from "../fragments";

export const DELETE_CART_ITEM = gql`
  mutation DeleteCartItem($id: Int!) {
    deleteCartItem(id: $id) {
      cart {
        ...CartDetailsFragment
      }
      success
    }
    ${CartFragments.details}
  }
`;

export const useDeleteCartItem = (itemId: number) => {
  const [deleteCartItem, { data, error }] = useMutation<
    DeleteCartItemTypes.DeleteCartItem,
    DeleteCartItemTypes.DeleteCartItemVariables
  >(DELETE_CART_ITEM, {
    update(cache, result) {
      const newCart = result.data?.deleteCartItem.cart;
      cache.modify({
        fields: {
          cart(existingCart) {
            return { ...existingCart, ...newCart };
          },
        },
      });

      cache.evict({ id: `CartItem:${itemId}` });
    },
  });

  const mutate = useCallback(() => {
    deleteCartItem({ variables: { id: itemId } });
  }, [deleteCartItem, itemId]);

  return { mutate, data, error };
};
