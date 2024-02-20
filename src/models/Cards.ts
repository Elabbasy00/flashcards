import * as mongoose from "mongoose";
import { User } from "./User";

const cardSchema = new mongoose.Schema(
  {
    term: String,
    definition: String,
    private: Boolean,
    description: String,
    lang: {
      type: String,
      enum: ["text", "python", "javascript", "pgsql", "cpp", "typescript"],
      default: "text",
    },
    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User.modelName,
    },
  },
  { toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

// cardSchema.virtual("tt", {
//   localField: "slug",
//   foreignField: "topic",
//   justOne: true,
// });
// cardSchema.virtual("user", {
//   ref: "User",
//   localField: "id",
//   foreignField: "ـid",
//   justOne: true,
// });

export const Card = mongoose.models?.Card ?? mongoose.model("Card", cardSchema);
