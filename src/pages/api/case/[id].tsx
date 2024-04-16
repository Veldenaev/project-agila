import { type NextApiRequest, type NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// DELETE /api/post/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const caseNum = req.query.id;
  if (req.method === "DELETE") {
    const post = await prisma.cases.delete({
      where: { CaseNum: String(caseNum) },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}
