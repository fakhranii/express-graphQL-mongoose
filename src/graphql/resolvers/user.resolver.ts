// every Query in the TypeDefs will have a resolver here with the same name
// also every Mutation in the TypeDefs will have a resolver here with the same name
// i have to specify the methods are related to Query or Mutation

export const userResolvers = {
  Query: {
    async users() {},
    async user() {},
    async me() {},
  },
};
