const sequelize = require('../config/connection')

const viewRole = async () => {
  const result = await sequelize.query("SELECT * FROM role")
  console.log(result[0])
  return result[0]
}


async function addRole(){

  const roleInfo = await viewRole();

  const employeePrompt = employeeInfo.map(() => {
    return {
      name: employeeInfo.fname + " " + employeeInfo.lname,
      value: employeeInfo.id
    }
  })
}
async function addRole() {
  const response = await inquirer.prompt([
    {
      type: "input",
      message: "What new role would you like to add?",
      name: "roleName"
    }]);
    console.log (response)
    const result = await sequelize.query(`INSERT INTO role (name) VALUES ('${response.title}');`);
  
}


  module.exports = {
    viewRole, 
    addRole
  }