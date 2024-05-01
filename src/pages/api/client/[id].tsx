import { type NextApiRequest, type NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { type Client } from "@prisma/client";

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
    const client: Client = req.body;
    const post = await prisma.client.update({
      where: { ClientID: Number(clientId) },
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
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}
