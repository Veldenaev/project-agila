import { type NextApiRequest, type NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const clientId = req.query.id;
  if (req.method === "DELETE") {
    // DELETE /api/client/:id
    const post = await prisma.client.delete({
      where: { ClientID: Number(clientId) },
    });
    res.json(post);
  } else if (req.method === "PUT") {
    // PUT /api/client/:id
    const { ClientID, ContractID, FirstName, LastName } = req.body;
    const post = await prisma.client.update({
      where: { ClientID: Number(ClientID) },
      data: {
        ClientID: Number(ClientID),
        ContractID: Number(ContractID),
        FirstName: String(FirstName),
        LastName: String(LastName),
      },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}
