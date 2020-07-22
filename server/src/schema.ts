import { gql } from "apollo-server";

const typeDefs = gql`
  type CartItem {
    id: Int!
    title: String!
  }

  type Cart {
    items: [CartItem!]!
  }

  type CartResult {
    success: Boolean!
    cart: Cart!
  }

  type Query {
    getCart(id: Int!): CartResult!
  }

  type Mutation {
    deleteCartItem(id: Int!): CartResult!
  }
`;

export { typeDefs };
