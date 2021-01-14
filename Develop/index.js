// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {q1: "What is your name?"},
    {q2: "What is the name of the project?"},
    {q3: "What is your GitHub url ending?"},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0].q1,
                name: 'name',
            },
            {
                type: 'input',
                message: questions[1].q2,
                name: 'projName',
            },
        ])
        .then((response) => {
            fileName = response.projName;
            data = response.name;
            console.log(fileName, data);
    });
}


// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
