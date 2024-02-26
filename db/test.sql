SELECT * FROM employee 
JOIN role ON role.id = employee.role_id
JOIN department ON department.id = role.department_id