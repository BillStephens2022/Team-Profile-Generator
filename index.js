// Require Node modules
const inquirer = require('inquirer');
const fs = require('fs');

//Import various Employee classes
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const generateHTML = require('./src/generateHTML');

let addEmployeeBoolean = true;

/* Create a team array that will hold all members of the team and related property values.
Will ultimately be used to render cards in an HTML file.*/

const teamArray = [];

/* function for user to create a manager by answering questions in the command
line using the Node Inquirer package.  Manager will then be added to the team array. */
function addManager() {
    return inquirer
        .prompt ([
            {
                type: "input",
                name: "name",
                message: "What is the team manager's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the team manager's employee ID?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the team manager's email?",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "what is the team manager's office number?",
            },
          
        ])
        .then(managerData => {
            const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
            teamArray.push(manager);
            addEmployeePrompt();
        });
}

function addEmployeePrompt() {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "employeeType",
                message: "What type of employee would you like to add to your team?",
                choices: ["Engineer", "Intern", "No other team members to add"],
            },
        ])
        .then(function(employeeChoice){
            if (employeeChoice.employeeType === "Engineer") {
                addEngineer();
            }
            else if (employeeChoice.employeeType === "Intern") {
                addIntern();  
            } else {
                return writeToFile();  //will possibly change to generateHTML() later
            }
        });
}

function addEngineer() {
    return inquirer
        .prompt ([
            {
                type: "input",
                name: "name",
                message: "What is the Engineer's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the Engineer's employee ID?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the Engineer's email?",
            },
            {
                type: "input",
                name: "gitHub",
                message: "what is the Engineer's GitHub profile?",
            },
        ])
        .then(engineerData => {
            const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.gitHub);
            teamArray.push(engineer);
            addEmployeePrompt();
        });
}

function addIntern() {
    return inquirer
        .prompt ([
            {
                type: "input",
                name: "name",
                message: "What is the Intern's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the Intern's employee ID?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the Intern's email?",
            },
            {
                type: "input",
                name: "school",
                message: "what is the Intern's school?",
            },
        ])
        .then(internData => {
            const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
            teamArray.push(intern);
            addEmployeePrompt();
        });
}

function writeToFile() {
    fs.writeFile('./dist/index.html', generateHTML(teamArray), (err) => {
        (err) ? console.log(err) : console.log("Team profile has been generated!");
    });
}

addManager();
