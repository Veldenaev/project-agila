import { type NextApiRequest, type NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { type Contract } from "@prisma/client";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const contractId = req.query.id;
  if (req.method === "DELETE") {
    // DELETE /api/contract/:id
    const post = await prisma.contract.delete({
      where: { ContractID: Number(contractId) },
    });
    res.json(post);
  } else if (req.method === "PUT") {
    // PUT /api/contract/:id
    const contract: Contract = req.body;
    const post = await prisma.contract.update({
      where: { ContractID: Number(contractId) },
      data: {
        ContractID: Number(contract.ContractID),
        ClientID: Number(contract.ClientID),
        MajorPleading: Number(contract.MajorPleading),
        MinorPleading: Number(contract.MinorPleading),
        PartnerApp: Number(contract.PartnerApp),
        JuniorAssocApp: Number(contract.JuniorAssocApp),
        SeniorAssocApp: Number(contract.SeniorAssocApp),
        isAmendment: Boolean(contract.isAmendment),
        RootContractID: Number(contract.RootContractID),
        Date: new Date(String(contract.Date)),
      },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}
