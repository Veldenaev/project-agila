import { type NextApiRequest, type NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { type Work } from "@prisma/client";

// POST /api/work
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const work: Work = req.body;
  const result = await prisma.work.create({
    data: {
      WorkID: Number(work.WorkID),
      CaseNum: String(work.CaseNum),
      Type: String(work.Type),
      Date: new Date(String(work.Date)),
      Remarks: String(work.Remarks),
      location: String(work.location),
      filename: String(work.filename),
      Title: String(work.Title),
      FeeAmt: Number(work.FeeAmt),
    },
  });
  res.json(result);
}
