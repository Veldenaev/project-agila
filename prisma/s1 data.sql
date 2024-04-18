USE project_agila;

INSERT INTO client
VALUES
	(1, 14, 'Alice', 'Johnson', 'Diaz', 'alicejohnson@example.com', '09191234567', '(02) 123-4567', 'Makati City', 'None', 'adjohnson', 'passAlice1'),
	(2, 6, 'Bob', 'White', 'Jones', 'bobwhite@example.com', '09261234567', '(02) 234-5678', 'Quezon City', 'None', 'bjwhite', 'passBob2'),
	(3, 4, 'Raj', 'Patel', 'Singh', 'rajpatel@example.com', '09341234567', '(02) 345-6789', 'Taguig City', 'None', 'rspatel', 'passRaj3'),
	(4, 11, 'Miguel', 'Garcia', 'Martinez', 'miguelgarcia@example.com', '09451234567', '(02) 456-7890', 'Mandaluyong City', 'None', 'mmgarcia', 'passMiguel4'),
	(5, 5, 'Lisa', 'Nguyen', 'Tran', 'lisanguyen@example.com', '09561234567', '(02) 567-8901', 'Makati City', 'None', 'ltnguyen', 'passLisa5'),
	(6, 16, 'James', 'Kim', 'Lee', 'jameskim@example.com', '09671234567', '(02) 678-9012', 'Pasig City', 'None', 'jlkim', 'passJames6'),
	(7, 1, 'Grace', 'Chang', 'Chen', 'gracechang@example.com', '09781234567', '(02) 789-0123', 'Quezon City', 'None', 'gcchang', 'passGrace7'),
	(8, 12, 'Carlos', 'Martinez', 'Lopez', 'carlosmartinez@example.com', '09891234567', '(02) 890-1234', 'Manila City', 'None', 'clmartinez', 'passCarlos8'),
	(9, 22, 'Olivia', 'Wilson', 'Wilson', 'oliviawilson@example.com', '09901234567', '(02) 901-2345', 'Taguig City', 'None', 'olwilson', 'passOlivia9'),
	(10, 2, 'Aisha', 'Khan', 'Malik', 'aishakhan@example.com', '09110234567', '(02) 012-3456', 'Pasig City', 'None', 'amkhan', 'passAisha10'),
	(11, 19, 'Anish', 'Patel', 'Sharma', 'anishpatel@example.com', '09221234567', '(02) 123-4567', 'Makati City', 'None', 'aspatel', 'passAnish11'),
	(12, 7, 'Jessica', 'Williams', 'Harris', 'jessicawilliams@example.com', '09331234567', '(02) 234-5678', 'Mandaluyong City', 'None', 'jhwilliams', 'passJessica12'),
	(13, 23, 'Michael', 'Li', 'Nguyen', 'michael.li@example.com', '09441234567', '(02) 345-6789', 'Manila City', 'None', 'mnli', 'passMichael13'),
	(14, 15, 'Maria', 'Schmidt', 'Silva', 'mariaschmidt@example.com', '09551234567', '(02) 456-7890', 'Taguig City', 'None', 'msschmidt', 'passMaria14'),
	(15, 8, 'Daniel', 'Park', 'Wong', 'danielpark@example.com', '09661234567', '(02) 567-8901', 'Quezon City', 'None', 'dwpark', 'passDaniel15'),
	(16, 9, 'Rachel', 'Brown', 'Baker', 'rachelbrown@example.com', '09771234567', '(02) 678-9012', 'Makati City', 'None', 'rbbrown', 'passRachel16'),
	(17, 20, 'Juan', 'Martinez', 'Gonzalez', 'juanmartinez@example.com', '09881234567', '(02) 789-0123', 'Pasig City', 'None', 'jgmartinez', 'passJuan17'),
	(18, 25, 'Kimberly', 'Johnson', 'Cooper', 'kimberlyjohnson@example.com', '09991234567', '(02) 890-1234', 'Mandaluyong City', 'None', 'kcjohnson', 'passKimberly18'),
	(19, 24, 'William', 'Nguyen', 'Ng', 'williamnguyen@example.com', '09101234567', '(02) 901-2345', 'Manila City', 'None', 'wnnguyen', 'passWilliam19'),
	(20, 3, 'Sophia', 'Kim', 'Gonzalez', 'sophiakim@example.com', '09211234567', '(02) 012-3456', 'Taguig City', 'None', 'sgkim', 'passSophia20'),
	(21, 0, 'Eric', 'Lee', 'Ng', 'ericlee@example.com', '09321234567', '(02) 123-4567', 'Pasig City', 'None', 'enlee', 'passEric21'),
-- 	(22, 0, 'Dylan', 'Wilson', 'Martinez', 'dylanwilson@example.com', '09431234567', '(02) 234-5678', 'Makati City', 'None', 'dmwilson', 'passDylan22'),
-- 	(23, 0, 'Lily', 'Chen', 'Wang', 'lilychen@example.com', '09541234567', '(02) 345-6789', 'Mandaluyong City', 'None', 'lwchen', 'passLily23'),
-- 	(24, 0, 'Sofia', 'Garcia', 'Gonzalez', 'sofiagarcia@example.com', '09651234567', '(02) 456-7890', 'Manila City', 'None', 'sogarcia', 'passSofia24'),
	(25, 17, 'Oscar', 'Tan', 'Lopez', 'oscartan@example.com', '09761234567', '(02) 567-8901', 'Quezon City', 'None', 'oltan', 'passOscar25');
    
INSERT INTO lawyer
VALUES
	(1, 'John', 'Doe', 'Garcia', 'johndoe@example.com', 'johndoe_alt@example.com', '09180000001', '(02) 123-4567', 'Makati City', 1, 'jgdoe', 'passJohn1'),
	(2, 'Jane', 'Smith', 'Reyes', 'janesmith@example.com', 'janesmith_alt@example.com', '09180000002', '(02) 987-6543', 'Quezon City', 1, 'jrsmith', 'passJane2'),
	(3, 'Michael', 'Johnson', 'Cruz', 'mikej@example.com', 'mikej_alt@example.com', '09180000003', '(02) 321-7890', 'Manila City', 0, 'mcjohnson', 'passMichael3'),
	(4, 'Sarah', 'Lee', 'Lopez', 'sarahlee@example.com', 'sarahlee_alt@example.com', '09180000004', '(02) 555-1212', 'Taguig City', 0, 'sllee', 'passSarah4'),
	(5, 'David', 'Brown', 'Santos', 'dbrown@example.com', 'dbrown_alt@example.com', '09180000005', '(02) 444-2323', 'Pasig City', 0, 'dsbrown', 'passDavid5'),
	(6, 'Emily', 'Garcia', 'White', 'emily.white@example.com', 'emily.white_alt@example.com', '09180000006', '(02) 777-8888', 'Mandaluyong City', 0, 'egwhite', 'passEmily6'),
	(7, 'Robert', 'Garcia', 'Reyes', 'rgarcia@example.com', 'rgarcia_alt@example.com', '09180000007', '(02) 222-9999', 'San Juan City', 0, 'rrgarcia', 'passRobert7'),
	(8, 'Olivia', 'Martinez', 'Cruz', 'olivia.m@example.com', 'olivia.m_alt@example.com', '09180000008', '(02) 666-7777', 'Parañaque City', 0, 'ocmartinez', 'passOlivia8'),
	(9, 'William', 'Lopez', 'Adams', 'w.adams@example.com', 'w.adams_alt@example.com', '09180000009', '(02) 111-3333', 'Pasay City', 0, 'wladams', 'passWilliam9'),
	(10, 'Sophia', 'Wilson', 'Santos', 'swilson@example.com', 'swilson_alt@example.com', '09180000010', '(02) 333-1111', 'Marikina City', 0, 'sswilson', 'passSophia10');

INSERT INTO contract
VALUES
	(1, 12, 1, 0, 1, 0, 0),
	(2, 4, 0, 1, 0, 0, 1),
	(3, 1, 1, 0, 1, 1, 0),
	(4, 15, 1, 0, 1, 1, 0),
	(5, 9, 0, 1, 0, 1, 0),
	(6, 2, 1, 0, 1, 0, 0),
	(7, 21, 0, 1, 0, 1, 0),
	(8, 11, 0, 1, 0, 1, 0),
	(9, 3, 1, 0, 1, 1, 0),
	(10, 24, 0, 1, 0, 0, 1),
	(11, 16, 1, 0, 1, 0, 0),
	(12, 18, 0, 1, 0, 0, 1),
	(13, 7, 0, 1, 0, 1, 0),
	(14, 8, 0, 1, 0, 1, 0),
	(15, 13, 1, 0, 1, 0, 0),
	(16, 6, 1, 0, 1, 0, 0),
	(17, 19, 0, 1, 0, 1, 0),
	(18, 20, 0, 1, 0, 1, 0),
	(19, 22, 0, 1, 0, 0, 1),
	(20, 5, 0, 1, 0, 0, 1),
	(21, 23, 0, 1, 0, 1, 0),
	(22, 17, 0, 1, 0, 0, 1),
	(23, 14, 0, 1, 0, 0, 1),
	(24, 25, 0, 1, 0, 0, 1),
	(25, 10, 1, 0, 1, 0, 0);

INSERT INTO work
VALUES
	(1, '1234', 'Type3', '2024-01-05', 'None', 'MinorPleadings', 'file_5.pdf'),
	(2, '5678', 'Type2', '2024-01-10', 'None', 'MinorPleadings', 'file_9.pdf'),
	(3, '9012', 'Type3', '2024-01-12', 'None', 'MinorPleadings', 'file_1.pdf'),
	(4, '3456', 'Type1', '2024-01-18', 'None', 'MajorPleadings', 'file_3.pdf'),
	(5, '7890', 'Type2', '2024-01-20', 'None', 'MajorPleadings', 'file_12.pdf'),
	(6, '2345', 'Type3', '2024-01-22', 'None', 'MajorPleadings', 'file_10.pdf'),
	(7, '6789', 'Type2', '2024-01-25', 'None', 'MajorPleadings', 'file_8.pdf'),
	(8, '1235', 'Type1', '2024-02-01', 'None', 'MinorPleadings', 'file_6.pdf'),
	(9, '5679', 'Type2', '2024-02-10', 'None', 'MinorPleadings', 'file_15.pdf'),
	(10, '9013', 'Type3', '2024-02-15', 'None', 'MinorPleadings', 'file_11.pdf'),
	(11, '3457', 'Type1', '2024-02-18', 'None', 'MinorPleadings', 'file_7.pdf'),
	(12, '7891', 'Type2', '2024-02-20', 'None', 'MinorPleadings', 'file_14.pdf'),
	(13, '2346', 'Type3', '2024-02-22', 'None', 'MinorPleadings', 'file_2.pdf'),
	(14, '6790', 'Type1', '2024-02-28', 'None', 'MajorPleadings', 'file_4.pdf'),
	(15, '1236', 'Type2', '2024-03-10', 'None', 'MajorPleadings', 'file_13.pdf');

INSERT INTO cases
VALUES
	('1234', 10, 24, 'Ongoing', 'Type3'),
	('5678', 17, 19, 'Ongoing', 'Type2'),
	('9012', 6, 2, 'Ongoing', 'Type3'),
	('3456', 19, 22, 'Ongoing', 'Type1'),
	('7890', 12, 18, 'Ongoing', 'Type2'),
	('2345', 2, 4, 'Ongoing', 'Type3'),
	('6789', 3, 1, 'Ongoing', 'Type2'),
	('1235', 5, 9, 'Ongoing', 'Type1'),
	('5679', 21, 23, 'Ongoing', 'Type2'),
	('9013', 1, 12, 'Ongoing', 'Type3'),
	('3457', 13, 7, 'Ongoing', 'Type1'),
	('7891', 14, 8, 'Ongoing', 'Type2'),
	('2346', 11, 16, 'Ongoing', 'Type3'),
	('6790', 9, 3, 'Ongoing', 'Type1'),
	('1236', 23, 14, 'Ongoing', 'Type2');

INSERT INTO _casestolawyer
VALUES
	('1234', 2),
	('5678', 5),
	('9012', 6),
	('3456', 8),
	('7890', 1),
	('2345', 3),
	('6789', 9),
	('1235', 4),
	('5679', 7),
	('9013', 10),
	('3457', 3),
	('7891', 1),
	('2346', 7),
	('6790', 2),
	('1236', 8);

INSERT INTO _lawyertowork
VALUES
	(2, 1),
	(5, 2),
	(6, 3),
	(8, 4),
	(1, 5),
	(3, 6),
	(9, 7),
	(4, 8),
	(7, 9),
	(10, 10),
	(3, 11),
	(1, 12),
	(7, 13),
	(2, 14),
	(8, 15);

SELECT * FROM client;
SELECT * FROM lawyer;
SELECT * FROM contract;
SELECT * FROM work;
SELECT * FROM cases;
SELECT * FROM _casestolawyer;
SELECT * FROM _lawyertowork;