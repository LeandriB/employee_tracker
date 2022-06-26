INSERT INTO department (name)
VALUES
    ("Finance"),
    ("HR"),
    ("Legal"),
    ("Sales");


INSERT INTO role (title, salary, department_id) 
VALUES
    ("Accountant", 70000, 1),
    ("Benefits Manager", 50000, 2),
    ("Paralegal", 80000, 3),
    ("Account Executive", 30000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ('Jenna', 'Smith', 1, NULL),
    ('Amy', 'Kuyk', 2, NULL),
    ('Jon', 'Sylvester', 3, NULL),
    ('Kara', 'Brown', 4, NULL);
