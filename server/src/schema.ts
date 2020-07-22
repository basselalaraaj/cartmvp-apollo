import { gql } from "apollo-server";

const typeDefs = gql`
    type CartItem {
        id: Int!
        title: String!
    }

    type Cart {
        items: [CartItem!]!
    }

    type Query {
        getCart(id: Int!): Cart!
    }

    type DeleteCartItemResult {
        success: Boolean!
        cartItem: Int!
    }

    type Mutation {
        deleteCartItem(id: Int!): DeleteCartItemResult!
    }
`;

export { typeDefs };
