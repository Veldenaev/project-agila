USE project_agila;

INSERT INTO client
VALUES
	(1, 'Johnson', 'Alice', 'Smith & Co', '555-555-5555', 'alicejohnson@example.com', '789 Oak Ave', 'Anothercity', 'TX', '67890'),
	(2, 'White', 'Bob', 'Tech Solutions', '555-111-2222', 'bobwhite@example.com', '101 Pine Rd', 'Smalltown', 'FL', '24680'),
	(3, 'Patel', 'Raj', 'Marketing Experts', '555-444-5555', 'rajpatel@example.com', '369 Maple Ave', 'Urbantown', 'GA', '97531'),
	(4, 'Garcia', 'Miguel', 'Logistics Solutions', '555-999-0000', 'miguelgarcia@example.com', '741 Forest Ln', 'Woodsville', 'MI', '36472'),
	(5, 'Nguyen', 'Lisa', 'Software Solutions', '555-333-3333', 'lisanguyen@example.com', '963 Hilltop Rd', 'Techcity', 'AZ', '87542'),
	(6, 'Kim', 'James', 'Financial Services', '555-666-7777', 'jameskim@example.com', '524 Valley Blvd', 'Banktown', 'CA', '24513'),
	(7, 'Chang', 'Grace', 'Health Innovations', '555-444-1111', 'gracechang@example.com', '632 Sunset Ave', 'Wellnessville', 'OH', '53624'),
	(8, 'Martinez', 'Carlos', 'Consulting Group', '555-888-9999', 'carlosmartinez@example.com', '489 River Rd', 'Consultville', 'TX', '13246'),
	(9, 'Wilson', 'Olivia', 'Media Solutions', '555-222-9999', 'oliviawilson@example.com', '774 Crestview Dr', 'Mediacity', 'FL', '70543'),
	(10, 'Khan', 'Aisha', 'Design Studio', '555-333-7777', 'aishakhan@example.com', '963 Park Ave', 'Artville', 'NY', '98765'),
	(11, 'Patel', 'Anish', 'Engineering Experts', '555-888-7777', 'anishpatel@example.com', '159 Ridgeview Dr', 'Technoville', 'CA', '56321'),
	(12, 'Williams', 'Jessica', 'Security Solutions', '555-111-4444', 'jessicawilliams@example.com', '8524 Oakwood Ln', 'Safetown', 'TX', '36987'),
	(13, 'Li', 'Michael', 'E-commerce Ventures', '555-555-7777', 'michael.li@example.com', '2465 Juniper St', 'Cybercity', 'FL', '74581'),
	(14, 'Schmidt', 'Maria', 'Fashion Inc', '555-777-3333', 'mariaschmidt@example.com', '3690 Cherry Blossom Dr', 'Styleville', 'CA', '25874'),
	(15, 'Park', 'Daniel', 'Renewable Energy Corp', '555-222-4444', 'danielpark@example.com', '741 Lakefront Rd', 'Greenburg', 'WA', '63928'),
	(16, 'Brown', 'Rachel', 'Education Solutions', '555-444-8888', 'rachelbrown@example.com', '325 Schoolhouse Ln', 'Scholarville', 'TX', '14789'),
	(17, 'Martinez', 'Juan', 'Realty Associates', '555-777-4444', 'juanmartinez@example.com', '9632 Main St', 'Realtytown', 'NY', '87456'),
	(18, 'Johnson', 'Kimberly', 'Food Services', '555-333-5555', 'kimberlyjohnson@example.com', '1478 Restaurant Row', 'Foodville', 'IL', '36925'),
	(19, 'Nguyen', 'William', 'Travel Adventures', '555-666-3333', 'williamnguyen@example.com', '632 Palm Beach Blvd', 'Explorertown', 'FL', '65487'),
	(20, 'Kim', 'Sophia', 'Artistic Creations', '555-888-4444', 'sophiakim@example.com', '963 Gallery Ave', 'Artcity', 'CA', '85214'),
	(21, 'Lee', 'Eric', 'Health Clinic', '555-111-8888', 'ericlee@example.com', '369 Wellness Dr', 'Healthtown', 'TX', '14725'),
	(22, 'Wilson', 'Dylan', 'Music Productions', '555-222-6666', 'dylanwilson@example.com', '987 Melody Ln', 'Musictown', 'NY', '36985'),
	(23, 'Chen', 'Lily', 'Tech Startups', '555-777-9999', 'lilychen@example.com', '258 Tech Blvd', 'Startville', 'CA', '95173'),
	(24, 'Garcia', 'Sofia', 'Fitness Solutions', '555-666-2222', 'sofiagarcia@example.com', '632 Gym Ave', 'Fitcity', 'TX', '63214'),
	(25, 'Kim', 'Hannah', 'Event Planning', '555-888-6666', 'hannahkim@example.com', '963 Celebration Rd', 'Partyville', 'NY', '98521');

INSERT INTO lawyer
VALUES
	(1, 'Doe', 'John', 'Criminal Law', '(555) 123-4567', 'johndoe@example.com', '123 Main St', 'Anytown', 'NY', '12345'),
	(2, 'Smith', 'Jane', 'Family Law', '(555) 987-6543', 'janesmith@example.com', '456 Oak Ave', 'Springfield', 'IL', '67890'),
	(3, 'Johnson', 'Michael', 'Corporate Law', '(555) 321-7890', 'mikej@example.com', '789 Elm St', 'Metro City', 'CA', '54321'),
	(4, 'Lee', 'Sarah', 'Immigration Law', '(555) 555-1212', 'sarahlee@example.com', '111 Pine Rd', 'Bigtown', 'TX', '10101'),
	(5, 'Brown', 'David', 'Real Estate Law', '(555) 444-2323', 'dbrown@example.com', '222 Cedar Ln', 'Lakeside', 'FL', '30303'),
	(6, 'White', 'Emily', 'Tax Law', '(555) 777-8888', 'emily.white@example.com', '333 Spruce Ave', 'Hilltown', 'PA', '50505'),
	(7, 'Garcia', 'Robert', 'Personal Injury', '(555) 222-9999', 'rgarcia@example.com', '444 Birch St', 'Sunnydale', 'AZ', '70707'),
	(8, 'Martinez', 'Olivia', 'Employment Law', '(555) 666-7777', 'olivia.m@example.com', '555 Maple Blvd', 'River City', 'WA', '90909'),
	(9, 'Adams', 'William', 'Environmental Law', '(555) 111-3333', 'w.adams@example.com', '666 Walnut Ave', 'Mountain View', 'CO', '80808'),
	(10, 'Wilson', 'Sophia', 'Intellectual Property', '(555) 333-1111', 'swilson@example.com', '777 Pineapple Ln', 'Oceanview', 'HI', '60606');

INSERT INTO notification
VALUES
	(1,'Welcome to the platform!','2024-02-25 08:00:00'),
	(2,'A new transaction has been started.','2024-02-26 12:30:00'),
	(3,'Your transaction has been processed.','2024-02-27 15:45:00'),
	(4,'Event reminder: Meeting at 3 PM today.','2024-02-28 09:00:00');

SELECT * FROM client;
SELECT * FROM lawyer;
SELECT * FROM notification;
