import { type NextApiRequest, type NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// DELETE /api/lawyer/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const id = req.query.id;
  if (req.method === "DELETE") {
    const post = await prisma.lawyer.delete({
      where: { LawyerID: Number(id) },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}
