import { MongoClient } from "mongodb";
import * as mongoose from "mongoose";
declare global {
  var _mongoClientPromise: any;
}

if (!process.env.DB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.DB_URI;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;

const connection = {
  isConnected: 0,
};

export const connectToDB = async () => {
  let db = null;
  if (connection.isConnected === 1) return;
  try {
    db = await mongoose.connect(process.env.DB_URI!);
  } catch (error) {
    console.error(error);
    return;
  }
  connection.isConnected = db.connections[0].readyState;
};

export const isDBConnected = () => connection.isConnected === 1;
