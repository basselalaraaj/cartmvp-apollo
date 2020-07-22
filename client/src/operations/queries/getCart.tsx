import { gql } from "@apollo/client";

export const GET_CART = gql`
  query GetCart($id: Int!) {
    getCart(id: $id) {
      items {
        id
        title
      }
    }
  }
`;
