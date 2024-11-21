import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs, resolvers } from "./graphql";

const app = express();

let apolloServer: ApolloServer;
async function startServer(): Promise<void> {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  app.use(express.json());
  app.use("/graphql", expressMiddleware(apolloServer)); // any req for "/graphql" will be handled by apolloServer
}

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
function cors() {
  throw new Error("Function not implemented.");
}
