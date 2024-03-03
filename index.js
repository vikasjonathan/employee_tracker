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
    // added condition as per choice calling the respective functions
        .then((answers) => {
            const { choices } = answers;
            console.log(choices);
            if (choices === "View All Employees") {
                viewAllEmployees();
            } else if (choices === "Add Employee") {
                addEmployee();
            } else if (choices === "View All Roles") {
                viewAllRoles();
            } else if (choices === "Add Role") {
                addRole();
            } else if (choices === "View All Departments") {
                viewAllDepartments();
            } else if (choices === "Add Department") {
                addDepartment();
            } else if (choices === "Update Employee Role") {
                updateEmployeeRole();
            } else if (choices === "Exit") {
                db.end();
            } else {
                console.log("No selection was matched");
            }
        });
};