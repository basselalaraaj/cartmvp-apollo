import { Resolvers, DeleteCartItemResult, Cart } from "./generated/graphql";
import { Context } from "./index";

const resolvers: Resolvers = {
    Mutation: {
        deleteCartItem: async (_, { id }, context: Context): Promise<DeleteCartItemResult> => {
            const { cartRepo } = context;

            await cartRepo.deleteCartItem(id);
            return { success: true };
        },
    },
    Query: {
        getCart: async (_, { id }, context: Context): Promise<Cart> => {
            const { cartRepo } = context;
            const cart = await cartRepo.getCartById(id);
            return cart;
        },
    },
};

export { resolvers };
