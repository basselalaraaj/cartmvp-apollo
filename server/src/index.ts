import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { cartRepo } from "./modules/cart/repos";
import { CartRepo } from "./modules/cart/repos/cartRepo";

export type Context = { cartRepo: CartRepo };

const server = new ApolloServer({
    context: () => ({ cartRepo } as Context),
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
