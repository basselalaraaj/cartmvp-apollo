import { gql, useMutation } from "@apollo/client";
// import * as DeleteTodoTypes from './__generated__/DeleteTodo'

export const DELETE_CART_ITEM = gql`
  mutation DeleteCartItem($id: Int!) {
    deleteCartItem(id: $id) {
      item {
        id
      }
      success
    }
  }
`;

export const useDeleteCartItem = () => {
  // const [mutate, { data, error }] = useMutation<
  //   DeleteTodoTypes.DeleteTodo,
  //   DeleteTodoTypes.DeleteTodoVariables
  // >(
  const [mutate, { data, error }] = useMutation(DELETE_CART_ITEM, {
    update(cache, el) {
      const deletedId = el.data?.deleteCartItem.item.id;

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
