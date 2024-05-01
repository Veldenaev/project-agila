import { type NextApiRequest, type NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { type Contract } from "@prisma/client";

// POST /api/contract
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const contract: Contract = req.body;
  const result = await prisma.contract.create({
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
  res.json(result);
}
