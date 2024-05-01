import { type NextApiRequest, type NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { type Lawyer } from "@prisma/client";

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
    const lawyer: Lawyer = req.body;
    const post = await prisma.lawyer.update({
      where: { LawyerID: Number(lawyerId) },
      data: {
        LawyerID: Number(lawyer.LawyerID),
        FirstName: String(lawyer.FirstName),
        LastName: String(lawyer.LastName),
        MiddleName: String(lawyer.MiddleName),
        Email: String(lawyer.Email),
        AltEmail: String(lawyer.AltEmail),
        CellNum: String(lawyer.CellNum),
        TelNum: String(lawyer.TelNum),
        CityAdd: String(lawyer.CityAdd),
        isManager: Boolean(lawyer.isManager),
        user: String(lawyer.user),
        pass: String(lawyer.pass),
      },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}
