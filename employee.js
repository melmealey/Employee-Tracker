const { default: inquirer } = require('inquirer')
const sequelize = require ('./config/connection')

const viewEmployee = async () => {
  const result = await sequelize.query("SELECT * FROM employee")
  console.log(result[0])
}

const addEmployee = async () => {
  //first name, last name, role-id, manager-id
  const employeeInfo = await viewEmployee();
  const roleInfo = await viewRole();

const employeePrompt =employeeInfo.map (()=>
  return {
      name:employeeInfo.name,
      value:employeeInfo.id
  }
)


  const rolePrompt = roleInfo.map((role) =>
  return {
    name: role.title,
    value: role.id
  }
  )
  console.log (rolePrompt);
  const response =await inquirer.prompt([
    {
      type: "list",
      message: "Please choose a role"
      name: 'role',
      choices: rolePrompt;
    }
  ]
    [

    ]
  )


  const result = await sequelize.query("SELECT * FROM employee")
  console.log(result[0])
}


module.exports = {
  viewEmployee,
  addEmployee
}