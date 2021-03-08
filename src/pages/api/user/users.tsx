import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import connect from "../../../../utils/database";

const handler = nc().get(async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connect();

  const collection = db.collection("users");

  const data = await collection.find().sort({ level: -1 }).toArray();

  res.status(200).json(data);
});

export default handler;
