const sequelize = require('./config/connection')
const inquirer = require('inquirer')
// const employee = require('./employee')
// const department = require('./department')
// const role = require('./role')

const viewEmployee = async () => {
  const result = await sequelize.query("SELECT * FROM employee");
  console.log(result[0]);
  return result[0];
}

const viewRole = async () => {
  const result = await sequelize.query("SELECT * FROM role");
  console.log(result[0]);
  return result[0];
}

const viewDepartment = async () => {
  const result = await sequelize.query("SELECT * FROM department");

}

const addEmployee = async () => {
  //fname, lname, role_id, manager_id
  const employeeInfo = await viewEmployee();
  const roleInfo = await viewRole();
  
const rolePrompt= roleInfo.map((role) => {
  return {
      name: role.title,
      value: role.id 
  }
})
  console.log(rolePrompt);
  const response = await inquirer.prompt([
    {
      type:
    }

  ])
}
//view all departments, view all roles, wiew all employees,
//add a department, add a role, add an employee,
//and update an employee role

const start = async () => {
  const response = await inquirer.prompt([
    {
      type: "list",
      message: "Choose from the options below:",
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
        }

      ]
    }
  ])
  const { selection } = response

  switch (selection) {
    case "VIEW EMP":
      viewEmployee()
      break
    case "VIEW ROLE":
      viewRole()
      break
    case "VIEW DEPT":
      viewDepartment()
      break



  }

}
sequelize.sync({ force: false }).then(start)

