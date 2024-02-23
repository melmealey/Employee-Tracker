const sequelize = require('../config/connection')

const viewDepartment = async () => {
  const result = await sequelize.query("SELECT * FROM department");
  console.table(result[0]);
  return result[0];

}
async function addDepartment() {
  const departmentInfo = await viewDepartment();
  const roleInfo = await viewRole();

  const departmentPrompt = departmentInfo.map(() => {
    return {
      name: deptName,
      value: employeeInfo.id
    }
  })
}

module.exports = {
  viewDepartment,
  addDepartment
}
