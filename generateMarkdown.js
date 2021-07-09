// TODO: Create a function that returns a license badge based on which license is passed in

const inquirer = require("inquirer"); 

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'Boost'){
    const licenseBadge = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]`;
     return licenseBadge;
   }
   else if(license === 'Apache'){
     const licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
     return licenseBadge;
   }
   else if(license === 'BSD-2'){
     const licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)]`
     return licenseBadge;
   }
   else if(license === 'BSD-3'){
     const licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]`
     return licenseBadge;
   }
   else {
     return '';
   }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'Boost'){
   const licenseTxt = `(https://www.boost.org/LICENSE_1_0.txt)`;
    return licenseTxt;
  }
  else if(license === 'Apache'){
    const licenseTxt = `(https://opensource.org/licenses/Apache-2.0)`
    return licenseTxt;
  }
  else if(license === 'BSD-2'){
    const licenseTxt = `(https://opensource.org/licenses/BSD-2-Clause)`
    return licenseTxt;
  }
  else if(license === 'BSD-3'){
    const licenseTxt = `(https://opensource.org/licenses/BSD-3-Clause)`
    return licenseTxt;
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
