// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {question: "What is your name?"},
    {question: "What is the name of the project?"},
    {question: "What is your GitHub url ending?"},
    {question: "What is a short description of the project?"},
    {question: "What are the installation steps?"},
    {question: "What are the use cases?"},
    {question: "What are the contribution guidelines?"},
    {question: "What are the test instructions?"}
];

// TODO: Create a function to write README file

function writeToFile() {
    
    // Create inquirer prompt to set the key pieces of data
    inquirer
    // Call each question, assign each response to a new variable.
        .prompt([
            {
                type: 'input',
                message: questions[0].question,
                name: 'name',
            },
            {
                type: 'input',
                message: questions[1].question,
                name: 'projName',
            },
            {
                type: 'input',
                message: questions[2].question,
                name: 'githubURL',
            },
            {
                type: 'input',
                message: questions[3].question,
                name: 'projDesc',
            },
            {
                type: 'input',
                message: questions[4].question,
                name: 'installInst',
            },
            {
                type: 'input',
                message: questions[5].question,
                name: 'projUsage',
            },
            {
                type: 'input',
                message: questions[6].question,
                name: 'contrGuide',
            },
            {
                type: 'input',
                message: questions[7].question,
                name: 'testInst',
            },
        ])
        .then((response) => {
            var fileName = `ReadMe--${response.projName.toLowerCase().split(' ').join('')}.txt`;
            const data = response.name;
            const githubURL = response.githubURL;
            const projDesc = response.projDesc;
            const installInst = response.installInst;
            const projUsage = response.projUsage;
            const contrGuide = response.contrGuide;
            const testInst = response.testInst;
            console.log(fileName, data);
            fs.appendFile(fileName, data, function (err) {
                if (err) throw err;
                console.log(data);
            });
    });
}


// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
