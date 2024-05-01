import { type Case } from "@prisma/client";

export const defaultCase: Case = {
  CaseNum: "",
  ContractID: 0,
  ClientID: 0,
  Status: "",
  Type: "",
  Title: "",
  Venue: "",
};
