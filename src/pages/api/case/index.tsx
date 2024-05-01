import { type NextApiRequest, type NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { type Case } from "@prisma/client";

// POST /api/case
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const theCase: Case = req.body;
  const result = await prisma.case.create({
    data: {
      CaseNum: String(theCase.CaseNum),
      ContractID: Number(theCase.ContractID),
      ClientID: Number(theCase.ClientID),
      Status: String(theCase.Status),
      Type: String(theCase.Type),
      Title: String(theCase.Title),
      Venue: String(theCase.Venue),
    },
  });
  res.json(result);
}
