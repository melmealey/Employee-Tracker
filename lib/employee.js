const { default: inquirer } = require('inquirer')
const sequelize = require ('../config/connection')
const {viewRole} = require ('./role')


const viewEmployee = async () => {
  const result = await sequelize.query(`SELECT employee.fname AS first_name, employee.lname AS last_name, title AS Job_Title,  salary, name AS department, manager.fname AS "manager fist name", manager.lname AS "manager last name"
  FROM employee
  JOIN role ON role.id = employee.role_id
  JOIN department ON department.id = role.department_id
  JOIN employee manager ON employee.manager_id = manager.id;
  `);
  console.table(result[0]);
  return result[0];
}

const addEmployee = async() => {
  const employeeInfo = await viewEmployee();
  const roleInfo = await viewRole();

  const employeePrompt = employeeInfo.map((employee) => {
      return {
          name: employee.fname + " " + employee.lname,
          value: employee.id
      }
  })

async function updateRole() {
  const response = await inquirer.prompt([
    {
      type: "input",
      message: "What ID would you like to update?",
      name: "deptName"
    }]);
    console.log (response)
    const result = await sequelize.query(`UPDATE employee SET role ='${response.deptName}' WHERE id= '${response.id}';`);
  
}
  
  const rolePrompt = roleInfo.map((role) => {
    return {
      name: role.title,
      value: role.id
    };
  });


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