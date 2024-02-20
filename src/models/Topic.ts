import * as mongoose from "mongoose";

const topicSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true, dropDups: true },
    slug: { type: String, unique: true, dropDups: true },
    description: String,
  },
  { toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

export const Topic =
  mongoose.models?.Topic ?? mongoose.model("Topic", topicSchema);

Topic.collection.createIndex({ slug: 1, name: 1 }, { unique: true });
