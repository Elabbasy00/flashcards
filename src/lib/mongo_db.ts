import { revalidatePath } from "next/cache";
import { Card } from "../models/Cards";
import { Topic } from "../models/Topic";
import { User } from "../models/User";
import { CardType, TopicType } from "../types/data-types";
import { connectToDB } from "../utils/dbconnect";

const StanderLimit = 10;
export const createCard = async (newCard: CardType) => {
  await connectToDB();
  let card = await Card.create(newCard);
  card = await card.populate(["topic", "user"]);
  revalidatePath("/public-cards");
  revalidatePath("/own-cards");
  return card;
};

export const getCardById = async (Id: string) => {
  await connectToDB();
  const card = await Card.findById(Id).populate(["topic", "user"]);
  return card;
};

export const deleteCard = async (Id: string) => {
  await connectToDB();
  const card = await Card.deleteOne({ _id: Id });
  return card;
};

export const getAllCards = async (filters: {}) => {
  await connectToDB();

  const cards = await Card.find(filters)
    .limit(StanderLimit)
    .populate(["topic", "user"])
    .exec();

  return cards;
};

export const createTopic = async (newTopic: TopicType) => {
  await connectToDB();
  revalidatePath("/");
  revalidatePath("/public-cards");
  revalidatePath("/create");
  return Topic.create(newTopic);
};

export const findTopic = async (filters: {}) => {
  await connectToDB();
  const topic =
    "id" in filters
      ? await Topic.findById(filters.id)
      : await Topic.findOne(filters);
  return topic;
};

export const getAllTopics = async (filters: {}) => {
  await connectToDB();
  const topics = await Topic.find(filters);
  return topics;
};
