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

  module.exports = {
    viewRole, 
    addRole
  }