import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import connect from "../../../../utils/database";
import upload from "../../../../utils/upload";

const handler = nc()
  .use(upload.single("file"))
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    const {
      login,
      id,
      avatar_url,
      name,
      location,
      level,
      currentExperience,
    } = req.body;

    const { db } = await connect();

    const collection = db.collection("users");

    const query = { id: id };

    const userExist = await collection.findOne(query);

    if (!userExist) {
      collection.insertOne({
        login,
        id,
        avatar_url,
        name,
        location,
        level: level || 0,
        currentExperience: currentExperience || 0,
        challangesHistory: []
      });
    } else {
      res.status(401).json({ message: "This user already exists" });
    }

    res.status(200).json({ ok: true });
  })
  .put(async (req: NextApiRequest, res: NextApiResponse) => {
    const { id, level, currentExperience, challangesHistory } = req.body;

    const { db } = await connect();

    const collection = db.collection("users");

    const userExists = collection.findOne({
      id: id,
    });

    if (userExists) {
      await collection.updateOne(
        { id: id },
        { $set: { level, currentExperience, challangesHistory } },
        { upsert: true }
      );
    } else {
      res.status(400).json({ message: "This user is not exists" });
    }

    res.status(200).json({ ok: true });
  });

export default handler;
