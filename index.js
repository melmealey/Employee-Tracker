const sequelize = require('./config/connection')
const inquirer = require('inquirer')
const {viewEmployee, addEmployee} = require('./lib/employee')
const {viewDepartment, addDepartment} = require('./lib/department')
// const role = require('./role')


const viewRole = async () => {
  const result = await sequelize.query("SELECT * FROM role");
  console.table(result[0]);
  return result[0];
}

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
      viewDepartment();
      break;
    case "VIEW ROLE":
      viewRole();
      break;
    case "VIEW EMP":
      viewEmployee();
      break
    case "ADD DEPT":
      addDepartment();
      break;
    case "ADD ROLE":
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