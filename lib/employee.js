const { default: inquirer } = require('inquirer')
const sequelize = require ('../config/connection')
const {viewRole} = require ('./role')

//still need to add managers
const viewEmployee = async () => {
  const result = await sequelize.query(`SELECT fname AS first_name, lname AS last_name, title AS Job_Title,  salary, name AS department FROM employee JOIN role ON role.id = employee.role_id JOIN department ON department.id = role.department_id;`);
  console.table(result[0]);
  return result[0];
}

async function addEmployee() {
  const employeeInfo = await viewEmployee();
  const roleInfo = await viewRole();

  const employeePrompt = employeeInfo.map((employee) => {
    return {
      name: employee.fname + " " + employee.lname,
      value: employee.id
    };
  });

  const rolePrompt = roleInfo.map((role) => {
    return {
      name: role.title,
      value: role.id
    };
  });

  employeePrompt ()

  const managerPrompt = department.manager_id

  inquirer.prompt([
    {
      type: "input",
      message: "What is the employees first name?",
      name: "fname"
    },
    {
      type: "input",
      message: "What is the employees last name?",
      name: "lname"
    },
    {
      type: "list",
      message: "Please choose a manager",
      name: "manager",
      choices: managerPrompt
    },
    {
      type: "list",
      message: "Please choose a role",
      name: "role",
      choices: rolePrompt
    }
  ])
  .then((answers) => {
    // Insert new employee into the database using Sequelize
    // insert the new employee details
    console.log("New employee added:", answers);
  });
}

module.exports = {
  viewEmployee,
  addEmployee
};