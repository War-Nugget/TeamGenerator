const generateHTML = require('./src/generateHTML');

// team profiles
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern'); 

const fs = require('fs'); 
const inquirer = require('inquirer');

const teamA - [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of your team?',
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.console.log("Enter the team managers name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the manager's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
    ])
}