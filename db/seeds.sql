INSERT INTO department(department_name)
VALUES
('Production'), 
('Operations'), 
('Legal'), 
('Information Technology'), 
('Management'), 
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES 
('Engineer', 100000, 1), 
('Accountant', 90000, 2), 
('Lawyer', 90000, 3), 
('IT Specialist', 70000, 4), 
('Project Manager', 120000, 5), 
('Telemarketer', 60000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("John","Brown", 1, null),
("Laura", "Irene", 2, 1),
("Jessie","James", 3, 2),
("Bob", "Jackson", 3, 2),
("Susie", "Raincloud", 4, 1),
("Jamal","Jordan", 5, 4),
("Jacob", "Bornstien", 6, 1),
("Patty", "Chin", 7, 6),
("Besty", "Taylor", 7, 6),
("Penny", "Many", 8, 1);