export interface CardType {
  _id: string;
  term: string;
  definition: string;
  private: boolean;
  lang: "text" | "python" | "javascript" | "pgsql" | "cpp" | "typescript";
  topic: TopicType;
  description: string;
  user: UserType;
}

export interface TopicType {
  _id: string;
  name: string;
  slug: string;
  description: string;
}

export interface UserType {
  name: string;
  email: string;
  image: string;
}
export declare type StringKeyValue = {
  [key: string]: string;
};
