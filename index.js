const sequelize = require('./config/connection')
const inquirer = require('inquirer')
const employee = require('./employee')
const department = require ('./department')
const role = require ('./role')

const viewEmployee


const start = async () => {
  const response = await inquirer.prompt([
    {
      type: "list",
      message: "Choose an option below:",
      name: "selection",
      choices: [
        {
          name: "view employees",
          value: "VIEW EMP"
        },
        {
          name: "view roles",
          value: "VIEW ROLE"
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

