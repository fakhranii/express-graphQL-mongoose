import { readFileSync } from "fs";
import path from "path";
import { userResolvers } from "./resolvers/user.resolver";

// const userType = readFileSync(
//   path.join(__dirname, "./typeDefs/user.graphql"),
//   "utf_8"
// );
const userType = readFileSync("./src/graphql/typeDefs/user.graphql", "utf8");

export const typeDefs = `${userType}`;
export const resolvers = {
  Query: { ...userResolvers.Query },
  Mutation: { ...userResolvers.Mutation },
};
