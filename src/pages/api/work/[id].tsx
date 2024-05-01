import { type NextApiRequest, type NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { type Work } from "@prisma/client";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const workId = req.query.id;
  if (req.method === "DELETE") {
    // DELETE /api/work/:id
    const post = await prisma.work.delete({
      where: { WorkID: Number(workId) },
    });
    res.json(post);
  } else if (req.method === "PUT") {
    // PUT /api/work/:id
    const work: Work = req.body;
    const post = await prisma.work.update({
      where: { WorkID: Number(workId) },
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
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}
