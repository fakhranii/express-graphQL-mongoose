// every Query in the TypeDefs will have a resolver here with the same name
// also every Mutation in the TypeDefs will have a resolver here with the same name
// i have to specify the methods are related to Query or Mutation

import User from "../../models/user.model";

export const userResolvers = {
  Query: {
    async users() {
      return await User.find();
    },
    async user(parent: any, args: any) {
      return await User.findById(args.id);
    },
  },
  Mutation: {
    async addUser(parent: any, args: any) {
      return await User.create(args.createUser);
    },
    async updateUser(parent: any, args: any) {
      return await User.findByIdAndUpdate(args.id, args.updateUser);
    },

    async deleteUser(parent: any, args: any) {
      const deletedUser = await User.findByIdAndDelete(args.id);
      return `User with ID ${args.id} was successfully deleted`;
    },
  },
};
