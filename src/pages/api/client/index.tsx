import { type NextApiRequest, type NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// POST /api/client
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { ClientID, ContractID, FirstName, LastName } = req.body;
  const result = await prisma.client.create({
    data: {
      ClientID: Number(ClientID),
      ContractID: Number(ContractID),
      FirstName: String(FirstName),
      LastName: String(LastName),
    },
  });
  res.json(result);
}
