SELECT employee.fname AS first_name, employee.lname AS last_name, title AS Job_Title,  salary, name AS department, manager.fname AS "manager fist name", manager.lname AS "manager last name"
FROM employee
JOIN role ON role.id = employee.role_id
JOIN department ON department.id = role.department_id;
JOIN employee manager ON employee.manager_id = manager.id
