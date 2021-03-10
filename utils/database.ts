import { Db, MongoClient } from "mongodb";

interface ConnectType {
  db: Db;
  client: MongoClient;
}

const client = new MongoClient(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function connect(): Promise<ConnectType> {
  if (!client.isConnected()) await client.connect();

  const db =
    process.env.BASE_URL === "http://localhost:3000"
      ? client.db("pomodo-dev")
      : client.db("pomodo-prod");

  return { client, db };
}
