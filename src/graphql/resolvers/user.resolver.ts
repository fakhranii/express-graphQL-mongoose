// every Query in the TypeDefs will have a resolver here with the same name
// also every Mutation in the TypeDefs will have a resolver here with the same name
// i have to specify the methods are related to Query or Mutation

export const userResolvers = {
  Query: {
    async users() {},
    async user(parent: any, args: any) {},
  },
  Mutation: {
    async addUser(parent: any, args: any) {
      // operation of post new user, gonna be here
      // the return statement
    },
  },
};
