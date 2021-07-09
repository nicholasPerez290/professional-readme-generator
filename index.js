// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = ['title of project:','Description:','Table of Contents:',
'Installation Instructions:','Usage Info:',
'License:','Contributor Info','Tests:','Github URL:','Email address:','Name of new file:'];
const tempReadme = (data) => {
  return ( `# ${data.title}

## Description

${data.description}

## Table of Contents
${data.tableOfContents}

## Installation Instructions
${data.install}

## Usage Info
${data.usage}

## How to Contribute
${data.contribute}

## Test Guidelines
${data.test}

## Questions
* See my github at: []${data.gitHub}
* Email me at: []${data.email}
`);
}
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
            name: 'tableOfContents'
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
        console.log(data.license)
        module.exports = data;
         let newtemp = tempReadme(data);
        writeToFile('README.md', newtemp);
    }).catch()
}

// Function call to initialize app
init();
