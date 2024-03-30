const sequelize = require('../config/connection')
const inquirer = require('inquirer')

const viewDepartment = async () => {
  const result = await sequelize.query("SELECT * FROM department");
  console.table(result[0]);
  return result[0];

}
async function addDepartment() {
  const response = await inquirer.prompt([
    {
      type: "text",
      message: "What is the name of your Department you would like to add?",
      name: "deptName"
    }])
    console.log (response.deptName)
    try {
      sequelize.query(`INSERT INTO department (name) VALUES ('${response.deptName}');`);
    }catch(error) {
      console.log (error);
}
}

module.exports = {
  viewDepartment,
  addDepartment
}
