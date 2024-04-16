export interface Client {
  ClientID: number;
  ContractID: number;
  FirstName: string;
  LastName: string;
  MiddleName: string;
  Email: string;
  CellNum: string;
  TelNum: string;
  CityAdd: string;
  Remarks: string;
  user: string;
  pass: string;
}

export interface Lawyer {
  LawyerId: number;
  FirstName: string;
  LastName: string;
  MiddleName: string;
  Email: string;
  AltEmail: string;
  CellNum: string;
  TelNum: string;
  CityAdd: string;
  isManager: boolean;
  user: string;
  pass: string;
}

export interface CaseAssignment {
  LawyerID: number;
  CaseNum: number;
}

export interface Case {
  CaseNum: string;
  ContractID: number;
  ClientID: number;
  Status: string;
  Type: string;
  Title: string;
  Venue: string;
}

export interface Contract {
  ContractID: number;
  ClientID: number;
  MajorPleading: number;
  MinorPleading: number;
  PartnerApp: number;
  JuniorAssocApp: number;
  SeniorAssocApp: number;
  isAmendment: boolean;
  RootContractID: number;
  Date: Date;
}

export interface Work {
  WorkID: number;
  CaseNum: string;
  Type: string;
  Date: Date;
  Remarks: string;
  location: string;
  filename: string;
  Title: string;
  FeeAmt: number;
}
