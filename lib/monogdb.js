import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.MONGODB) {
  throw new Error('Invalid/Missing environment variable: "MONGODB"');
}

const uri = process.env.MONGODB;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect().catch((err) => {
      console.error("Failed to connect to MongoDB", err);
      throw err;
    });
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect().catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    throw err;
  });
}

export async function connectToDatabase() {
  const client = await clientPromise;
  return client.db();
}
