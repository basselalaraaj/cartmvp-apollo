import { gql, useMutation } from "@apollo/client";
import * as DeleteCartItemTypes from "./__generated__/DeleteCartItem";

export const DELETE_CART_ITEM = gql`
  mutation DeleteCartItem($id: Int!) {
    deleteCartItem(id: $id) {
      cartItem
      success
    }
  }
`;

export const useDeleteCartItem = () => {
  const [mutate, { data, error }] = useMutation<
    DeleteCartItemTypes.DeleteCartItem,
    DeleteCartItemTypes.DeleteCartItemVariables
  >(DELETE_CART_ITEM, {
    update(cache, el) {
      const deletedId = el.data?.deleteCartItem.cartItem;

      cache.modify({
        fields: {
          cart(existingCart, { readField }) {
            const newCart = {
              ...existingCart,
              items: existingCart.items.filter((item: any) => {
                return deletedId !== readField("id", item.id);
              }),
            };

            return newCart;
          },
        },
      });

      cache.evict({ id: `CartItem:${deletedId}` });
    },
  });

  return { mutate, data, error };
};
