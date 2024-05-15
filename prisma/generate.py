import names
import random

from dataclasses import dataclass


def gen_id() -> int:
    return random.randint(10**4, 3 * 10**4 - 1)


def gen_company() -> str:
    a = names.get_last_name()
    b = random.choice(["& co.", "Corporation", "Ltd.", "Industries", "United"])
    return f"{a} {b}"


def gen_email(first_name: str, last_name: str, middle_name: str) -> str:
    a = first_name.lower()[0]
    b = middle_name.lower()[0]
    c = last_name.lower()
    return f"{a}{b}{c}@gmail.com"


def gen_alt_email(first_name: str, last_name: str, middle_name: str) -> str:
    a = first_name.lower()[0]
    b = middle_name.lower()[0]
    c = last_name.lower()
    return f"{a}{b}{c}+alt@gmail.com"


def gen_date() -> str:
    y = random.randint(2020, 2024)
    m = random.randint(1, 12)
    d = random.randint(1, 28)
    return f"{y}-{str(m).zfill(2)}-{str(d).zfill(2)}"


def gen_digit_str(len: int) -> str:
    res = ""
    for _ in range(len):
        res += random.choice("0123456789")
    return res


def gen_title() -> str:
    return f"Title {gen_digit_str(3)}"


def gen_filename() -> str:
    exts = ["png", "jpg", "pdf"]
    return f"file_{gen_digit_str(3)}.{random.choice(exts)}"


def gen_cell() -> str:
    return f"09{gen_digit_str(2)} {gen_digit_str(3)} {gen_digit_str(4)}"


def gen_tel() -> str:
    return f"{gen_digit_str(3)}-{gen_digit_str(4)}"


def gen_city() -> str:
    return random.choice(["Manila", "Quezon", "Pasig"])


def gen_sentence() -> str:
    a = ["A", "The", "That"]
    b = ["fat", "quick", "crazy"]
    c = ["red", "blue", "green", "brown"]
    d = ["fox", "pig", "cow", "sheep"]
    e = ["jumps", "floats", "hops", "dances"]
    f = ["over", "under"]
    g = ["the"]
    h = ["lazy", "happy", "sleepy"]
    i = ["dog.", "cat.", "mouse."]

    return " ".join([random.choice(l) for l in [a, b, c, d, e, f, g, h, i]])


@dataclass
class Client:
    ClientID: int
    ContractID: int
    FirstName: str
    LastName: str
    MiddleName: str
    Email: str
    CellNum: str
    TelNum: str
    CityAdd: str
    Remarks: str
    user: str
    passw: str
    CompanyName: str

    def __init__(self, client_id: int, contract_id: int) -> None:
        self.ClientID = client_id
        self.ContractID = contract_id
        self.FirstName = names.get_first_name()
        self.LastName = names.get_last_name()
        self.MiddleName = names.get_first_name()
        self.Email = gen_email(self.FirstName, self.LastName, self.MiddleName)
        self.CellNum = gen_cell()
        self.TelNum = gen_tel()
        self.CityAdd = gen_city()
        self.Remarks = gen_sentence()
        self.user = f"{self.FirstName[0].lower()}{self.MiddleName[0].lower()}{self.LastName.lower()}"
        self.passw = "password"
        self.CompanyName = gen_company()

    def __repr__(self) -> str:
        return f"({self.ClientID}, {self.ContractID}, '{self.FirstName}', '{self.LastName}', '{self.MiddleName}', '{self.Email}', '{self.CellNum}', '{self.TelNum}', '{self.CityAdd}', '{self.Remarks}', '{self.user}', '{self.passw}', '{self.CompanyName}')"


@dataclass
class Lawyer:
    LawyerID: int
    FirstName: str
    LastName: str
    MiddleName: str
    Email: str
    AltEmail: str
    CellNum: str
    TelNum: str
    CityAdd: str
    isManager: bool
    user: str
    passw: str

    def __init__(self, lawyer_id: int) -> None:
        self.LawyerID = lawyer_id
        self.FirstName = names.get_first_name()
        self.LastName = names.get_last_name()
        self.MiddleName = names.get_first_name()
        self.Email = gen_email(self.FirstName, self.LastName, self.MiddleName)
        self.AltEmail = gen_alt_email(self.FirstName, self.LastName, self.MiddleName)
        self.CellNum = gen_cell()
        self.TelNum = gen_tel()
        self.CityAdd = gen_city()
        self.isManager = random.randint(1, 100) == 1
        self.user = f"{self.FirstName[0].lower()}{self.MiddleName[0].lower()}{self.LastName.lower()}"
        self.passw = "password"

    def __repr__(self) -> str:
        return f"({self.LawyerID}, '{self.FirstName}', '{self.LastName}', '{self.MiddleName}', '{self.Email}', '{self.AltEmail}', '{self.CellNum}', '{self.TelNum}', '{self.CityAdd}', {1 if self.isManager else 0}, '{self.user}', '{self.passw}')"


@dataclass
class Contract:
    ContractID: int
    ClientID: int
    MajorPleading: int
    MinorPleading: int
    PartnerApp: int
    JuniorAssocApp: int
    SeniorAssocApp: int
    isAmendment: bool
    RootContractID: int
    Date: str
    filename: str
    Title: str

    def __init__(self, contract_id: int, client_id: int, root: int) -> None:
        self.ContractID = contract_id
        self.ClientID = client_id
        self.MajorPleading = random.randint(0, 2 * 10**4)
        self.MinorPleading = random.randint(0, 2 * 10**4)
        self.PartnerApp = random.randint(0, 2 * 10**4)
        self.JuniorAssocApp = random.randint(0, 2 * 10**4)
        self.SeniorAssocApp = random.randint(0, 2 * 10**4)
        self.isAmendment = random.randint(1, 10) == 1
        self.RootContractID = root if self.isAmendment else 0
        self.Date = gen_date()
        self.filename = gen_filename()
        self.Title = gen_title()

    def __repr__(self) -> str:
        return f"({self.ContractID}, {self.ClientID}, {self.MajorPleading}, {self.MinorPleading}, {self.PartnerApp}, {self.JuniorAssocApp}, {self.SeniorAssocApp}, {1 if self.isAmendment else 0}, {self.RootContractID}, '{self.Date}', '{self.filename}', '{self.Title}')"


@dataclass
class Payment:
    PaymentID: int
    ClientID: int
    Amount: int
    Date: str

    def __init__(self, payment_id: int, client_id: int) -> None:
        self.PaymentID = payment_id
        self.ClientID = client_id
        self.Amount = random.randint(10**3, 10**4)
        self.Date = gen_date()

    def __repr__(self) -> str:
        return f"({self.PaymentID}, {self.ClientID}, {self.Amount}, '{self.Date}')"


@dataclass
class Case:
    CaseNum: str
    ContractID: int
    ClientID: int
    Status: str
    Type: str
    Title: str
    Venue: str
    OngoingStatus: bool

    def __init__(self, case_num: str, contract_id: int, client_id: int) -> None:
        self.CaseNum = case_num
        self.ContractID = contract_id
        self.ClientID = client_id
        self.Status = random.choice(["Ongoing", "Settled"])
        self.Type = random.choice(["Civil", "Special", "Criminal", "Litigation"])
        self.Title = gen_title()
        self.Venue = "Court"
        self.OngoingStatus = self.Status == "Ongoing"

    def __repr__(self) -> str:
        return f"('{self.CaseNum}', {self.ContractID}, {self.ClientID}, '{self.Status}', '{self.Type}', '{self.Title}', '{self.Venue}', {1 if self.OngoingStatus else 0})"


@dataclass
class Work:
    WorkID: int
    CaseNum: str
    Type: str
    Date: str
    Remarks: str
    location: str
    filename: str
    Title: str
    FeeAmt: int

    def __init__(self, work_id: int, case_num: str) -> None:
        self.WorkID = work_id
        self.CaseNum = case_num
        self.Type = random.choice(["Major Pleading", "Minor Pleading"])
        self.Date = gen_date()
        self.Remarks = gen_sentence()
        self.location = "TBD"
        self.filename = gen_filename()
        self.Title = gen_title()
        self.FeeAmt = random.randint(10**3, 10**4)

    def __repr__(self) -> str:
        return f"({self.WorkID}, '{self.CaseNum}', '{self.Type}', '{self.Date}', '{self.Remarks}', '{self.location}', '{self.filename}', '{self.Title}', {self.FeeAmt})"


MAX = 10**3

client_id_pool = [*set(gen_id() for _ in range(MAX))]
lawyer_id_pool = [*set(gen_id() for _ in range(MAX))]
contract_id_pool = [*set(gen_id() for _ in range(MAX))]
work_id_pool = [*set(gen_id() for _ in range(MAX))]
case_id_pool = [*set(gen_digit_str(5) for _ in range(MAX))]
payment_id_pool = [*set(gen_id() for _ in range(MAX))]

case_to_lawyer_pool = [
    *set(
        zip(
            [random.choice(case_id_pool) for _ in range(MAX)],
            [random.choice(lawyer_id_pool) for _ in range(MAX)],
        )
    )
]
lawyer_to_work_pool = [
    *set(
        zip(
            [random.choice(case_to_lawyer_pool)[1] for _ in range(MAX)],
            [random.choice(work_id_pool) for _ in range(MAX)],
        )
    )
]

payment_client_pool = [
    *zip(
        [*set(random.choice(payment_id_pool) for _ in range(MAX))],
        [random.choice(client_id_pool) for _ in range(MAX)],
    )
]
client_contract_pool = [
    *zip(
        [*set(random.choice(payment_client_pool)[1] for _ in range(MAX))],
        [*set(random.choice(contract_id_pool) for _ in range(MAX))],
    )
]
work_case_pool = [
    *zip(
        [*set(random.choice(lawyer_to_work_pool)[1] for _ in range(MAX))],
        [random.choice(case_to_lawyer_pool)[0] for _ in range(MAX)],
    )
]

case_contract_client_pool = [
    *zip(
        [*set(random.choice(case_to_lawyer_pool)[0] for _ in range(MAX))],
        [random.choice(client_contract_pool) for _ in range(MAX)],
    )
]
contract_client_root_pool = [
    *zip(
        [*set(random.choice(client_contract_pool) for _ in range(MAX))],
        [random.choice(client_contract_pool)[1] for _ in range(MAX)],
    )
]

DELIMITER = ",\n    "


client_values = DELIMITER.join(
    [str(client) for client in [Client(a, b) for a, b in client_contract_pool]]
)
lawyer_values = DELIMITER.join(
    [str(lawyer) for lawyer in [Lawyer(a) for a in lawyer_id_pool]]
)
contract_values = DELIMITER.join(
    [
        str(contract)
        for contract in [Contract(b, a, c) for (a, b), c in contract_client_root_pool]
    ]
)
work_values = DELIMITER.join(
    [str(work) for work in [Work(a, b) for a, b in work_case_pool]]
)
case_values = DELIMITER.join(
    [str(case_) for case_ in [Case(a, c, b) for a, (b, c) in case_contract_client_pool]]
)
payment_values = DELIMITER.join(
    [str(payment) for payment in [Payment(a, b) for a, b in payment_client_pool]]
)
case_to_lawyer_values = DELIMITER.join(
    [f"('{a}', {b})" for a, b in case_to_lawyer_pool]
)
lawyer_to_work_values = DELIMITER.join([f"({a}, {b})" for a, b in lawyer_to_work_pool])

sql_file = f"""\
USE project_agila;

SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO client
VALUES
    {client_values};

INSERT INTO lawyer
VALUES
    {lawyer_values};

INSERT INTO contract
VALUES
    {contract_values};

INSERT INTO work
VALUES
    {work_values};

INSERT INTO `case`
VALUES
    {case_values};

INSERT INTO payment
VALUES
    {payment_values};

INSERT INTO _casetolawyer
VALUES
    {case_to_lawyer_values};

INSERT INTO _lawyertowork
VALUES
    {lawyer_to_work_values};

SET FOREIGN_KEY_CHECKS = 1;"""

print(sql_file)
