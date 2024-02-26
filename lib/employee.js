const { default: inquirer } = require('inquirer')
const sequelize = require ('../config/connection')
const {viewRole} = require ('./role')

//employee data, including  and managers
const viewEmployee = async () => {
  const result = await sequelize.query(`SELECT fname AS first, lname AS last, salary AS Salary, title AS Job_Title, name FROM employee
  JOIN role ON role.id = employee.role_id
  JOIN department ON department.id = role.department_id;`);
  console.table(result[0]);
  return result[0];
}

async function addEmployee() { console.log ('HELLO')
  //fname, lname, role_id, manager_id
  const employeeInfo = await viewEmployee();
  const roleInfo = await viewRole();
  console.log (employeeInfo, roleInfo)

  const employeePrompt= employeeInfo.map (() =>{
    return {
      name: employeeInfo.fname + " " + employeeInfo.lname,
      value: employeeInfo.id
    }
  })
   //update employee
const rolePrompt= roleInfo.map((role) => {
  return {
      name: role.title,
      value: role.id 
  }
})
  inquirer.prompt([
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
  .then ((answers)=> {
    //add these to the db
    console.log (answers)
  })
    console.log(response.role);
    console.log(response.manager)
}

// addEmployee()

module.exports = {
  viewEmployee,
  addEmployee

}