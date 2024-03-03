const inquirer = require("inquirer");
// import connection
const db = require("./config/connection");

const prompUser = () => {

    inquirer.prompt([{
        type: "list",
        name: "choices",
        message: "Choose an option",
        choices: [
            "View all employes",
            "Add Employee",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department",
            "Update Employee Role",
            "Exit",
        ],
    },
])

.then(answers) => {
    const {choices} =answers;
    
}

}