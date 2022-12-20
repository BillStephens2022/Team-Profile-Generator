// Require Node modules
const inquirer = require('inquirer');
const fs = require('fs');

//Import classes
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

/* Create a team array that will hold all members of the team and related property values.
Will ultimately be used to render cards in an HTML file.*/

teamArray = [];

/* function allowing user to create a manager by answering questions in the command
line using the Node Inquirer package.  Manager will then be added to the team array. */
function addManager() {
    inquirer
        .prompt ([
            {
                type: "input",
                name: "name",
                message: "What is the manager's name for this team?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's employee ID?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email?",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "what is the manager's office number?",
            }
        ])
        .then(managerData => {
            const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
            teamArray.push(manager);
            console.log(manager);
        })
}

addManager();