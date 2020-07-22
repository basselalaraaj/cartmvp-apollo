import gql from "graphql-tag.macro";

export const CartFragments = {
  details: gql`
    fragment CartDetailsFragment on Cart {
      items {
        id
        title
      }
    }
  `,
};
