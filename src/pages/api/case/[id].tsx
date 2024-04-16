import { type NextApiRequest, type NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const caseNum = req.query.id;
  if (req.method === "DELETE") {
    // DELETE /api/post/:id
    const post = await prisma.cases.delete({
      where: { CaseNum: String(caseNum) },
    });
    res.json(post);
  } else if (req.method === "PUT") {
    // PUT /api/post/:id
    const { CaseNum, ContractID, ClientID, Status, Type } = req.body;
    const post = await prisma.cases.update({
      where: { CaseNum: String(caseNum) },
      data: {
        CaseNum: String(CaseNum),
        ContractID: Number(ContractID),
        ClientID: Number(ClientID),
        Status: String(Status),
        Type: String(Type),
      },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}
