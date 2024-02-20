import * as mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    image: String,
  },
  { toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

export const User = mongoose.models?.User ?? mongoose.model("User", UserSchema);
