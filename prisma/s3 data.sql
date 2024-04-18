USE project_agila;

INSERT INTO client
VALUES
	(1, 3, 'Alice', 'Johnson', 'Diaz', 'alicejohnson@example.com', '09191234567', '(02) 123-4567', 'Makati City', 'None', 'adjohnson', 'passAlice1'),
	(2, 6, 'Bob', 'White', 'Jones', 'bobwhite@example.com', '09261234567', '(02) 234-5678', 'Quezon City', 'None', 'bjwhite', 'passBob2'),
	(3, 9, 'Raj', 'Patel', 'Singh', 'rajpatel@example.com', '09341234567', '(02) 345-6789', 'Taguig City', 'None', 'rspatel', 'passRaj3'),
	(4, 2, 'Miguel', 'Garcia', 'Martinez', 'miguelgarcia@example.com', '09451234567', '(02) 456-7890', 'Mandaluyong City', 'None', 'mmgarcia', 'passMiguel4'),
	(5, 20, 'Lisa', 'Nguyen', 'Tran', 'lisanguyen@example.com', '09561234567', '(02) 567-8901', 'Makati City', 'None', 'ltnguyen', 'passLisa5'),
	(6, 16, 'James', 'Kim', 'Lee', 'jameskim@example.com', '09671234567', '(02) 678-9012', 'Pasig City', 'None', 'jlkim', 'passJames6'),
	(7, 13, 'Grace', 'Chang', 'Chen', 'gracechang@example.com', '09781234567', '(02) 789-0123', 'Quezon City', 'None', 'gcchang', 'passGrace7'),
	(8, 14, 'Carlos', 'Martinez', 'Lopez', 'carlosmartinez@example.com', '09891234567', '(02) 890-1234', 'Manila City', 'None', 'clmartinez', 'passCarlos8'),
	(9, 5, 'Olivia', 'Wilson', 'Wilson', 'oliviawilson@example.com', '09901234567', '(02) 901-2345', 'Taguig City', 'None', 'olwilson', 'passOlivia9'),
	(10, 25, 'Aisha', 'Khan', 'Malik', 'aishakhan@example.com', '09110234567', '(02) 012-3456', 'Pasig City', 'None', 'amkhan', 'passAisha10'),
	(11, 8, 'Anish', 'Patel', 'Sharma', 'anishpatel@example.com', '09221234567', '(02) 123-4567', 'Makati City', 'None', 'aspatel', 'passAnish11'),
	(12, 1, 'Jessica', 'Williams', 'Harris', 'jessicawilliams@example.com', '09331234567', '(02) 234-5678', 'Mandaluyong City', 'None', 'jhwilliams', 'passJessica12'),
	(13, 15, 'Michael', 'Li', 'Nguyen', 'michael.li@example.com', '09441234567', '(02) 345-6789', 'Manila City', 'None', 'mnli', 'passMichael13'),
	(14, 23, 'Maria', 'Schmidt', 'Silva', 'mariaschmidt@example.com', '09551234567', '(02) 456-7890', 'Taguig City', 'None', 'msschmidt', 'passMaria14'),
	(15, 4, 'Daniel', 'Park', 'Wong', 'danielpark@example.com', '09661234567', '(02) 567-8901', 'Quezon City', 'None', 'dwpark', 'passDaniel15'),
	(16, 11, 'Rachel', 'Brown', 'Baker', 'rachelbrown@example.com', '09771234567', '(02) 678-9012', 'Makati City', 'None', 'rbbrown', 'passRachel16'),
	(17, 22, 'Juan', 'Martinez', 'Gonzalez', 'juanmartinez@example.com', '09881234567', '(02) 789-0123', 'Pasig City', 'None', 'jgmartinez', 'passJuan17'),
	(18, 12, 'Kimberly', 'Johnson', 'Cooper', 'kimberlyjohnson@example.com', '09991234567', '(02) 890-1234', 'Mandaluyong City', 'None', 'kcjohnson', 'passKimberly18'),
	(19, 17, 'William', 'Nguyen', 'Ng', 'williamnguyen@example.com', '09101234567', '(02) 901-2345', 'Manila City', 'None', 'wnnguyen', 'passWilliam19'),
	(20, 18, 'Sophia', 'Kim', 'Gonzalez', 'sophiakim@example.com', '09211234567', '(02) 012-3456', 'Taguig City', 'None', 'sgkim', 'passSophia20'),
	(21, 7, 'Eric', 'Lee', 'Ng', 'ericlee@example.com', '09321234567', '(02) 123-4567', 'Pasig City', 'None', 'enlee', 'passEric21'),
    (22, 19, 'Dylan', 'Wilson', 'Martinez', 'dylanwilson@example.com', '09431234567', '(02) 234-5678', 'Makati City', 'None', 'dmwilson', 'passDylan22'),
    (23, 21, 'Lily', 'Chen', 'Wang', 'lilychen@example.com', '09541234567', '(02) 345-6789', 'Mandaluyong City', 'None', 'lwchen', 'passLily23'),
    (24, 10, 'Sofia', 'Garcia', 'Gonzalez', 'sofiagarcia@example.com', '09651234567', '(02) 456-7890', 'Manila City', 'None', 'sogarcia', 'passSofia24'),
	(25, 24, 'Oscar', 'Tan', 'Lopez', 'oscartan@example.com', '09761234567', '(02) 567-8901', 'Quezon City', 'None', 'oltan', 'passOscar25');
    
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
	(1,12,13295,0,1,0,0,0,0,'2024-02-15'),
	(2,4,0,8775,0,0,1,0,0,'2024-01-22'),
	(3,1,16182,0,1,1,0,0,0,'2024-01-25'),
	(4,15,17936,0,1,1,0,0,0,'2024-02-13'),
	(5,9,0,9453,0,1,0,0,0,'2024-02-01'),
	(6,2,16824,0,1,0,0,0,0,'2024-01-12'),
	(7,21,0,10228,0,1,0,0,0,'2024-01-19'),
	(8,11,0,9772,0,1,0,0,0,'2024-02-14'),
	(9,3,18567,0,1,1,0,0,0,'2024-02-28'),
	(10,24,0,11000,0,0,1,0,0,'2024-01-05'),
	(11,16,16540,0,1,0,0,0,0,'2024-02-22'),
	(12,18,0,9243,0,0,1,0,0,'2024-01-20'),
	(13,7,0,8516,0,1,0,0,0,'2024-02-18'),
	(14,8,0,9463,0,1,0,0,0,'2024-02-20'),
	(15,13,13987,0,1,0,0,0,0,'2024-03-07'),
	(16,6,15247,0,1,0,0,0,0,'2024-03-01'),
	(17,19,0,10379,0,1,0,0,0,'2024-01-10'),
	(18,20,0,8106,0,1,0,0,0,'2024-03-15'),
	(19,22,0,10317,0,0,1,0,0,'2024-01-18'),
	(20,5,0,9482,0,0,1,0,0,'2024-03-11'),
	(21,23,0,9365,0,1,0,0,0,'2024-02-10'),
	(22,17,0,8439,0,0,1,0,0,'2024-03-17'),
	(23,14,0,8612,0,0,1,0,0,'2024-03-10'),
	(24,25,0,10410,0,0,1,0,0,'2024-03-12'),
	(25,10,18250,0,1,0,0,0,0,'2024-03-08');

INSERT INTO work
VALUES
	(1, '1234', 'MinorPleadings', '2024-01-05', 'None', 'TBD', 'file_10.pdf', 'Title10', 11000),
	(2, '5678', 'MinorPleadings', '2024-01-10', 'None', 'TBD', 'file_17.pdf', 'Title17', 10379),
	(3, '9012', 'MinorPleadings', '2024-01-12', 'None', 'TBD', 'file_6.pdf', 'Title6', 16824),
	(4, '3456', 'MajorPleadings', '2024-01-18', 'None', 'TBD', 'file_19.pdf', 'Title19', 10317),
	(5, '7890', 'MajorPleadings', '2024-01-20', 'None', 'TBD', 'file_12.pdf', 'Title12', 9243),
	(6, '2345', 'MajorPleadings', '2024-01-22', 'None', 'TBD', 'file_2.pdf', 'Title2', 8775),
	(7, '6789', 'MajorPleadings', '2024-01-25', 'None', 'TBD', 'file_3.pdf', 'Title3', 16187),
	(8, '1235', 'MinorPleadings', '2024-02-01', 'None', 'TBD', 'file_5.pdf', 'Title5', 9453),
	(9, '5679', 'MinorPleadings', '2024-02-10', 'None', 'TBD', 'file_21.pdf', 'Title21', 9365),
	(10, '9013', 'MinorPleadings', '2024-02-15', 'None', 'TBD', 'file_1.pdf', 'Title1', 13295),
	(11, '3457', 'MinorPleadings', '2024-02-18', 'None', 'TBD', 'file_13.pdf', 'Title13', 8516),
	(12, '7891', 'MinorPleadings', '2024-02-20', 'None', 'TBD', 'file_14.pdf', 'Title14', 9463),
	(13, '2346', 'MinorPleadings', '2024-02-22', 'None', 'TBD', 'file_11.pdf', 'Title11', 16540),
	(14, '6790', 'MajorPleadings', '2024-02-28', 'None', 'TBD', 'file_9.pdf', 'Title9', 18562),
	(15, '1236', 'MajorPleadings', '2024-03-10', 'None', 'TBD', 'file_23.pdf', 'Title23', 8612);

INSERT INTO cases
VALUES
	('1234', 10, 24, 'Ongoing', 'Criminal', 'Title10', 'Court'),
	('5678', 17, 19, 'Ongoing', 'Special', 'Title17', 'Court'),
	('9012', 6, 2, 'Ongoing', 'Civil', 'Title6', 'Court'),
	('3456', 19, 22, 'Ongoing', 'Litigation', 'Title19', 'Court'),
	('7890', 12, 18, 'Ongoing', 'Litigation', 'Title12', 'Court'),
	('2345', 2, 4, 'Ongoing', 'Litigation', 'Title2', 'Court'),
	('6789', 3, 1, 'Ongoing', 'Criminal', 'Title3', 'Court'),
	('1235', 5, 9, 'Ongoing', 'Special', 'Title5', 'Court'),
	('5679', 21, 23, 'Ongoing', 'Criminal', 'Title21', 'Court'),
	('9013', 1, 12, 'Ongoing', 'Civil', 'Title1', 'Court'),
	('3457', 13, 7, 'Ongoing', 'Litigation', 'Title13', 'Court'),
	('7891', 14, 8, 'Ongoing', 'Litigation', 'Title14', 'Court'),
	('2346', 11, 16, 'Ongoing', 'Criminal', 'Title11', 'Court'),
	('6790', 9, 3, 'Ongoing', 'Civil', 'Title9', 'Court'),
	('1236', 23, 14, 'Ongoing', 'Special', 'Title23', 'Court');

INSERT INTO payment
VALUES
	(1, 24, 11000, '2024-03-21'),
	(2, 19, 10000, '2024-03-24'),
	(3, 2, 16824, '2024-03-25'),
	(4, 22, 10300, '2024-03-26'),
	(5, 18, 9240, '2024-03-27'),
	(6, 4, 8775, '2024-03-29'),
	(7, 1, 16000, '2024-04-01'),
	(8, 9, 9300, '2024-04-03'),
	(9, 23, 9365, '2024-04-05'),
	(10, 12, 13100, '2024-04-07'),
	(11, 7, 8516, '2024-04-08'),
	(12, 8, 9463, '2024-04-10'),
	(13, 16, 16500, '2024-04-13'),
	(14, 3, 18562, '2024-04-14'),
	(15, 14, 8612, '2024-04-15');

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
SELECT * FROM payment;
SELECT * FROM _casestolawyer;
SELECT * FROM _lawyertowork;