import gql from "graphql-tag.macro";
import { CartFragments } from "../fragments";

export const GET_CART = gql`
  query GetCart($id: Int!) {
    getCart(id: $id) {
      cart {
        ...CartDetailsFragment
      }
      success
    }
    ${CartFragments.details}
  }
`;
