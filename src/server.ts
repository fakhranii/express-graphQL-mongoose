import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs, resolvers } from "./graphql";
import "dotenv/config";
import connectDB from "./database/database.config";

const app = express();

connectDB();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

async function main() {
  await apolloServer.start();
  app.use(express.json());
  app.use("/graphql", expressMiddleware(apolloServer));
}
// start the server
main();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
