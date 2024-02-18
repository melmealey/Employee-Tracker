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
  console.log(result[0]);
  return result[0];

}

const addEmployee = async () => {
  //fname, lname, role_id, manager_id
  const employeeInfo = await viewEmployee();
  const roleInfo = await viewRole();

  const employeePrompt= employeeInfo.map (() =>{
    return {
      name: employeeInfo.fname + " " + employeeInfo.lname,
      value: employeeInfo.id
    }
  })
  
const rolePrompt= roleInfo.map((role) => {
  return {
      name: role.title,
      value: role.id 
  }
})

  const response = await inquirer.prompt([
    {
      type: "text",
      message: "Please enter a first name",
    },
    {
      type: "text",
      message: "Please enter a last name",
    },
    {
      type: "list",
      message: "Please choose a manager",
      name: "manager",
      choices: employeePrompt
    },
    {
      type: "list",
      message: "Please choose a role",
      name: "role",
      choices: rolePrompt
    }
  ])
    console.log(response.role);
    console.log(response.manager)
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
      console.log('You chose department view')
      viewDepartment();
      break;
    case "VIEW ROLE":
      console.log('You chose role view')
      viewRole();
      break;
    case "VIEW EMP":
      console.log('You chose employee view')
      viewEmployee();
      break
    case "ADD DEPT":
      console.log('You chose ADD department')
      break;
    case "ADD ROLE":
      console.log('You chose ADD role')
      break;
    case "ADD EMP":
      console.log('You chose ADD employee')
      addEmployee();
      break;
  }
}

sequelize.sync({ force: false }).then(start)

