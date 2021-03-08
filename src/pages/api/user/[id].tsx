import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import connect from "../../../../utils/database";

const handler = nc().get(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  const { db } = await connect();

  const collection = db.collection("users");

  const numberId = Number(id);

  const result = await collection.findOne({ id: numberId });

  res.json(result);
});

export default handler;
