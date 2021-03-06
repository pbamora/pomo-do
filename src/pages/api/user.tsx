import { NextApiRequest, NextApiResponse } from "next";
import { useContext } from "react";
import connect from "../../../utils/database";
import { AuthContext } from "../../contexts/AuthContext";

interface ApiResponseType {
  message: string;
}

export default async (
  request: NextApiRequest,
  response: NextApiResponse<ApiResponseType>
): Promise<void> => {
  if (request.method === "POST") {
    const { name, level, currentExperience, challangesHistory } = request.body;

    const { db } = await connect();

    const res = await db.collection("users").insertOne({
      level,
      currentExperience,
      challangesHistory,
    });

    response.status(200).json(res.ops[0]);
  } else if (request.method === "GET") {
    const { id } = request.body;

    const { db } = await connect();

    const res = await db.collection("users").insertOne({});

    response.status(200).json(res.ops[0]);
  } else {
    response.status(400).json({
      message: `Does not possible create data with method ${request.method}`,
    });
  }
};
