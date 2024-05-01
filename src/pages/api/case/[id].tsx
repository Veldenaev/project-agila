import { type NextApiRequest, type NextApiResponse } from "next";
import { type Case } from "@prisma/client";
import prisma from "../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const caseNum = req.query.id;
  if (req.method === "DELETE") {
    // DELETE /api/case/:id
    const result = await prisma.case.delete({
      where: { CaseNum: String(caseNum) },
    });
    res.json(result);
  } else if (req.method === "PUT") {
    // PUT /api/case/:id
    const theCase: Case = req.body;
    const result = await prisma.case.update({
      where: { CaseNum: String(caseNum) },
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
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}
