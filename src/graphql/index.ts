import { readFileSync } from "fs";
import path from "path";
import { userResolvers } from "./resolvers/user.resolver";

const userType = readFileSync(
  path.join(__dirname, "./typeDefs/user.graphql"),
  "utf-8"
);
// const userTypeDefs = readFileSync("./src/graphql/user.graphql", "utf8");

export const typeDefs = [userType];
export const resolvers = {
  Query: { ...userResolvers.Query },
};
