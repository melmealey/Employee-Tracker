const sequelize = require('./config/connection')
const inquirer = require('inquirer')
const {viewEmployee, addEmployee} = require('./lib/employee')

// const department = require('./department')
// const role = require('./role')


const viewRole = async () => {
  const result = await sequelize.query("SELECT * FROM role");
  console.table(result[0]);
  return result[0];
}

const viewDepartment = async () => {
  const result = await sequelize.query("SELECT * FROM department");
  console.table(result[0]);
  return result[0];

}
const addDepartment = async () => {
  const departmentInfo = await viewDepartment();
  const roleInfo = await viewRole();

  const departmentPrompt= departmentInfo.map (() =>{
    return {
      name: employeeInfo.fname + " " + employeeInfo.lname,
      value: employeeInfo.id
    }
  })
}

  
 
//view all departments, view all roles, wiew all employees,
//add a department, add a role, add an employee,
//and update an employee role

const start = async () => {
  const response = await inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?:",
      name: "selection",
      choices: [
        {
          name: "View all departments",
          value: "VIEW DEPT"
        },
        {
          name: "View all roles",
          value: "VIEW ROLE"
        },
        {
          name: "View all employees",
          value: "VIEW EMP"
        },
        {
          name: "Add new department",
          value: "ADD DEPT"
        },
        {
          name: "Add new role",
          value: "NEW ROLE"
        },
        {
          name: "Add new employee",
          value: "NEW EMP"
        },
        {
          name: "Update an employee role",
          value: "UPDATE EMP ROLE"
        }
      ]
    }
  ])
  const { selection } = response

  switch (selection) {
    case "VIEW DEPT":
      console.log('View All Departments')
      viewDepartment();
      break;
    case "VIEW ROLE":
      console.log('View All Roles')
      viewRole();
      break;
    case "VIEW EMP":
      console.log('View All Employees')
      viewEmployee();
      break
    case "ADD DEPT":
      console.log('ADD a Department')
      break;
    case "ADD ROLE":
      console.log('ADD a Role')
      break;
    case "ADD EMP":
      console.log('ADD an Employee')
      addEmployee();
      break;
    case "UPDATE EMP ROLE":
      console.log('UPDATE an Employee Role')
      updateEmployee();
      break;
  }
}

sequelize.sync({ force: false }).then(start)