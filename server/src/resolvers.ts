import { Resolvers, CartResult } from "./generated/graphql";
import { Context } from "./index";

const resolvers: Resolvers = {
  Mutation: {
    deleteCartItem: async (
      _,
      { id },
      context: Context
    ): Promise<CartResult> => {
      const { cartRepo } = context;

      await cartRepo.deleteCartItem(id);
      const cart = await cartRepo.getCartById(id);
      return { success: true, cart };
    },
  },
  Query: {
    getCart: async (_, { id }, context: Context): Promise<CartResult> => {
      const { cartRepo } = context;
      const cart = await cartRepo.getCartById(id);
      return { success: true, cart };
    },
  },
};

export { resolvers };
