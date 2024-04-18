import { type NextApiRequest, type NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// POST /api/case
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { CaseNum, ContractID, ClientID, Status, Type } = req.body;

  const result = await prisma.cases.create({
    data: {
      CaseNum: String(CaseNum),
      ContractID: Number(ContractID),
      ClientID: Number(ClientID),
      Status: String(Status),
      Type: String(Type),
    },
  });
  res.json(result);
}
