import { type NextApiRequest, type NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { type Client } from "@prisma/client";

// POST /api/client
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const client: Client = req.body;
  const result = await prisma.client.create({
    data: {
      ClientID: Number(client.ClientID),
      ContractID: Number(client.ContractID),
      FirstName: String(client.FirstName),
      LastName: String(client.LastName),
      MiddleName: String(client.MiddleName),
      Email: String(client.Email),
      CellNum: String(client.CellNum),
      TelNum: String(client.TelNum),
      CityAdd: String(client.CityAdd),
      Remarks: String(client.Remarks),
      user: String(client.user),
      pass: String(client.pass),
    },
  });
  res.json(result);
}
