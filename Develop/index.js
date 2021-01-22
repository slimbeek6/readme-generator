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
    {question: "What are the test instructions?"},
    {question: "What is your email?"}
];

// List of licenses
const licenseOpts = ["MIT", "Mozilla", "Perl"];

const licenseObjs = [
    {name: "MIT", badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", link: "[License: MIT](https://opensource.org/licenses/MIT)" },
    {name: "Mozilla", badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)", link: "[License: Mozilla](https://opensource.org/licenses/MPL-2.0)" },
    {name: "Perl", badge: "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)", link: "[License: Perl](https://opensource.org/licenses/Artistic-2.0)" }
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
                type: 'list',
                message: questions[6].question,
                name: 'projLicense',
                choices: licenseOpts,
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
            {
                type: 'input',
                message: questions[9].question,
                name: 'email',
            },
        ])
        .then((response) => {

            // take in the responses and assign them to specific sections of the readme
            const fileName = `ReadMe--${response.projName.toLowerCase().split(' ').join('')}.md`;
            const title = `# ${response.projName}`;
            const Summ = `## Description`;            
            const installInst = `## Installation \n ${response.installInst}`;
            const projUsage = `## Usage \n ${response.projUsage}`;
            const contrGuide = `## Contributing \n To contribute to this project: ${response.contrGuide}`;
            const projTests = `## Tests \n When running this file ensure the function is running properly by: ${response.testInst}`;
            var license = "";
            var licenseBadge = "";
            if (response.projLicense === "MIT"){
                license = licenseObjs[0].link;
                licenseBadge = licenseObjs[0].badge;
            }
            else if (response.projLicense === "Mozilla"){
                license = licenseObjs[1].link;
                licenseBadge = licenseObjs[1].badge;
            }
            else if (response.projLicense === "Perl"){
                license = licenseObjs[2].link;
                licenseBadge = licenseObjs[2].badge;
            }
            const projQuestions = `## Questions \n Send questions to ${response.name} at ${response.email}, or see the github repository here: https://github.com/${response.githubURL}`;
            const projLicense = `## Licenses \n This was built using code developed by: ${license}`;
            

            // Create Table of Contents
            const TOC = "* [Description](#description) \n * [Installation](#installation) \n * [Project Usage](#usage) \n * [Licenses](#licenses) \n * [Tests](#tests) \n * [Contributing](#Contributing) \n * [Questions](#questions)";

            // Create total response
            const output = title + `\n` + `\n ${licenseBadge}`+ `\n` + Summ + `\n ${response.projDesc}` + "\n ### Table of Contents"+ "\n <!--ts--> \n"+TOC+"\n <!--te-->"  + "\n" + installInst + "\n" + projUsage + "\n" + projLicense + "\n" + contrGuide + "\n" + projTests + "\n" + projQuestions;

            
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
