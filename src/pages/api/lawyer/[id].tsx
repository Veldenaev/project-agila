import { type NextApiRequest, type NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const lawyerId = req.query.id;
  if (req.method === "DELETE") {
    // DELETE /api/lawyer/:id
    const post = await prisma.lawyer.delete({
      where: { LawyerID: Number(lawyerId) },
    });
    res.json(post);
  } else if (req.method === "PUT") {
    // PUT /api/lawyer/:id
    const { LawyerID, FirstName, LastName, Email } = req.body;
    const post = await prisma.lawyer.update({
      where: { LawyerID: Number(LawyerID) },
      data: {
        LawyerID: Number(LawyerID),
        FirstName: String(FirstName),
        LastName: String(LastName),
        Email: String(Email),
      },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}
