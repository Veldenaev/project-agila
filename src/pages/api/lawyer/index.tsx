import { type NextApiRequest, type NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// POST /api/client
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { LawyerID, FirstName, LastName, Email } = req.body;
  const result = await prisma.lawyer.create({
    data: {
      LawyerID: Number(LawyerID),
      FirstName: String(FirstName),
      LastName: String(LastName),
      Email: String(Email),
    },
  });
  res.json(result);
}
