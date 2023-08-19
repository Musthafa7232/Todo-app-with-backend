import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: String,
    password: String,
    todos: [
      {
        todo: String,
        isDeleted: {
          type: Boolean,
          default: false,
        },
        checked: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", userSchema);

export default Users;
