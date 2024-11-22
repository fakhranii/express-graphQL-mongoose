import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "name required"],
    },
    email: {
      type: String,
      required: [true, "email required"],
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
