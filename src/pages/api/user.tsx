import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import connect from "../../../utils/database";
import upload from "../../../utils/upload";

interface ApiResponseType {
  message: string;
}

const handler = nc()
  .use(upload.single("file"))
  .post((req: NextApiRequest, res: NextApiResponse) => {
    const {
      name,
      email,
      avatar,
      level,
      currentExperience,
      completedChallanges,
    } = req.body;

    
  });

export default handler;
