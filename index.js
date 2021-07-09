// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ['title of project?','Description of Project?','Table of Contents, leave space for each item:',
'What installation command should be used for this project?','What should the user know about using your project?',
'Witch License should be used?','How can the user contribute? ','Tests the user should run?','Github URL:','Email address:'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('README created.'))
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title' 
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'tableOfContents',
            loop: 'false'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'install'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'usage'
        },
        {
            type: 'list',
            message: questions[5],
            name: 'license',
            choices: ['Apache','Boost','BSD-3','BSD-2',]
        },
        {
            type: 'input',
            message: questions[6],
            name: 'contribute'
        },
        {
            type: 'input',
            message: questions[7],
            name: 'test'
        },
        {
            type: 'input',
            message: questions[8],
            name: 'git'
        },
        {
            type: 'input',
            message: questions[9],
            name: 'email'
        },
    ]).then((data) => {
       const newTemp = generateMarkdown(data);
        writeToFile('README.md', newTemp);
    }).catch()
}

// Function call to initialize app
init();
