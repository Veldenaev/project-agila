import { type NextApiRequest, type NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { type Lawyer } from "@prisma/client";

// POST /api/lawyer
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const lawyer: Lawyer = req.body;
  const result = await prisma.lawyer.create({
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
  res.json(result);
}
