export interface Client {
  clientId: number;
  contractId: number;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  cellNum: string;
  telNum: string;
  cityAdd: string;
  remarks: string;
  user: string;
  pass: string;
}

export interface Lawyer {
  lawyerId: number;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  altEmail: string;
  cellNum: string;
  telNum: string;
  cityAdd: string;
  isManager: boolean;
  user: string;
  pass: string;
}

export interface CaseAssignment {
  lawyerId: number;
  caseNum: number;
}

export interface Case {
  caseNum: number;
  contractId: number;
  clientId: number;
  status: string;
  type: string;
  title: string;
  venue: string;
}

export const allClients: Client[] = [
  {
    clientId: 0,
    contractId: 140,
    firstName: "Pearl",
    lastName: "Fey",
    middleName: "",
    email: "pearlf@email.com",
    cellNum: "09170003333",
    telNum: "987-4567",
    cityAdd: "Address 3",
    remarks: "Remarks 3",
    user: "pearlsama",
    pass: "yet_another_password",
  },
  {
    clientId: 1,
    contractId: 280,
    firstName: "Polius",
    lastName: "Arele",
    middleName: "Garate",
    email: "apg@email.com",
    cellNum: "09170001111",
    telNum: "123-4567",
    cityAdd: "Address 2",
    remarks: "Remarks 2",
    user: "polius_arele",
    pass: "another_password",
  },
  {
    clientId: 2,
    contractId: 420,
    firstName: "Lauren",
    lastName: "Smith",
    middleName: "Regalia",
    email: "slr@email.com",
    cellNum: "09170002222",
    telNum: "000-0000",
    cityAdd: "Address 1",
    remarks: "Remarks 1",
    user: "lauren_smith",
    pass: "password",
  },
  {
    clientId: 3,
    contractId: 560,
    firstName: "Wilson",
    lastName: "Ten",
    middleName: "Mighty",
    email: "wmt@email.com",
    cellNum: "09170004444",
    telNum: "555-5555",
    cityAdd: "Address 4",
    remarks: "Remarks 4",
    user: "WILSON TEN",
    pass: "matutong maghintay",
  },
];

export const allLawyers: Lawyer[] = [
  {
    lawyerId: 0,
    firstName: "Phoenix",
    lastName: "Wright",
    middleName: "Wrong",
    email: "pww@email.com",
    altEmail: "wwp@email.com",
    cellNum: "0123456789",
    telNum: "765-4321",
    cityAdd: "Address X",
    isManager: false,
    user: "phoenix",
    pass: "wright",
  },
  {
    lawyerId: 1,
    firstName: "Dick",
    lastName: "Gumshoe",
    middleName: "Detective",
    email: "pww@email.com",
    altEmail: "wwp@email.com",
    cellNum: "0123456789",
    telNum: "765-4321",
    cityAdd: "Address X",
    isManager: true,
    user: "phoenix",
    pass: "wright",
  },
  {
    lawyerId: 2,
    firstName: "Hello",
    lastName: "World",
    middleName: "Hi",
    email: "pww@email.com",
    altEmail: "wwp@email.com",
    cellNum: "0123456789",
    telNum: "765-4321",
    cityAdd: "Address X",
    isManager: false,
    user: "phoenix",
    pass: "wright",
  },
];

export const allCases: Case[] = [
  {
    caseNum: 0,
    contractId: 0,
    clientId: 0,
    status: "Concluded",
    type: "Homicide",
    title: "Bridge to the Turnabout",
    venue: "",
  },
];

export const allCaseAssignments: CaseAssignment[] = [];
