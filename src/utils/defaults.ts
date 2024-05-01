import {
  type Payment,
  type Case,
  type Lawyer,
  type Client,
} from "@prisma/client";

export const defaultCase: Case = {
  CaseNum: "",
  ContractID: 0,
  ClientID: 0,
  Status: "",
  Type: "",
  Title: "",
  Venue: "",
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
