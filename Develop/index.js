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
    {question: "What licenses are needed?"},
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
                name: 'projLicense',
            },
            {
                type: 'input',
                message: questions[7].question,
                name: 'contrGuide',
            },
            {
                type: 'input',
                message: questions[8].question,
                name: 'testInst',
            },
        ])
        .then((response) => {

            // take in the responses and assign them to specific sections of the readme
            const fileName = `ReadMe--${response.projName.toLowerCase().split(' ').join('')}.md`;
            const title = `# ${response.projName}`;
            const userName = response.name;
            const githubURL = response.githubURL;
            const Summ = `## Description`;
            const projDesc = `${response.projDesc}`;
            const projQuestions = `## Questions \n Send questions to: ${userName}, or see the github repository here: https://github.com/${githubURL}`;
            const installInst = `## Installation \n ${response.installInst}`;
            const projUsage = `## Usage \n ${response.projUsage}`;
            const contrGuide = `## Contributing \n To contribute to this project: ${response.contrGuide}`;
            const projTests = `## Tests \n When running this file ensure the function is running properly by: ${response.testInst}`;
            const projLicense = `## Licenses \n This was built using code developed by: ${response.projLicense}`;
            console.log(title, Summ);

            // Create Table of Contents
            const TOC = "* [Description](#description) \n * [Installation](#installation) \n * [Project Usage](#usage) \n * [Licenses](#licenses) \n * [Tests](#tests) \n * [Contributing](#Contributing) \n * [Questions](#questions)";

            // Create total response
            const output = title + "\n" + Summ + "\n" + projDesc + "### Table of Contents \n <!--ts--> \n"+TOC+"\n <!--te-->"  + "\n" + installInst + "\n" + projUsage + "\n" + projLicense + "\n" + contrGuide + "\n" + projTests + "\n" + projQuestions;

            
            // Create Title
            fs.writeFile(fileName, output, function (err) {
                if (err) throw err;
            });
    });
}


// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
