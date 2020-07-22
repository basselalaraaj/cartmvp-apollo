import { gql } from "@apollo/client";

export const GET_CART = gql`
  query GetCart {
    items {
      id
      title
    }
  }
`;
