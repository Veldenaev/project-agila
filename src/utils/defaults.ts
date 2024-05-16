import {
  type Payment,
  type Case,
  type Lawyer,
  type Client,
  type Work,
  type Contract,
} from "@prisma/client";

export const defaultCase: Case = {
  CaseNum: "",
  ContractID: 0,
  ClientID: 0,
  Status: "",
  Type: "",
  Title: "",
  Venue: "",
  OngoingStatus: false,
};

export const defaultClient: Client = {
  ClientID: 0,
  ContractID: 0,
  FirstName: "",
  LastName: "",
  MiddleName: "",
  Email: "",
  CellNum: "",
  TelNum: "",
  CityAdd: "",
  Remarks: "",
  CompanyName: "",
  user: "",
  pass: "",
};

export const defaultLawyer: Lawyer = {
  LawyerID: 0,
  FirstName: "",
  LastName: "",
  MiddleName: "",
  Email: "",
  AltEmail: "",
  CellNum: "",
  TelNum: "",
  CityAdd: "",
  isManager: false,
  user: "",
  pass: "",
};

export const defaultPayment: Payment = {
  PaymentID: 0,
  ClientID: 0,
  Amount: 0,
  Date: new Date(),
};

export const defaultContract: Contract = {
  ContractID: 0,
  ClientID: 0,
  MajorPleading: 0,
  MinorPleading: 0,
  PartnerApp: 0,
  JuniorAssocApp: 0,
  SeniorAssocApp: 0,
  isAmendment: false,
  RootContractID: 0,
  Date: new Date(),
  filename: "",
  Title: "",
};

export const defaultWork: Work = {
  WorkID: 0,
  CaseNum: "",
  Type: "",
  Date: new Date(),
  Remarks: "",
  location: "",
  filename: "",
  Title: "",
  FeeAmt: 0,
};
