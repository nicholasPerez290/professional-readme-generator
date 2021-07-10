// TODO: Create a function that returns a license badge based on which license is passed in
const licenseInfo = require('./index.js')
const inquirer = require("inquirer"); 
function tableOfContents(data){
   arryOfContents = []
   if(data.install){
    arryOfContents.push('Installation')
   }
   if(data.usage){
     arryOfContents.push('Usage')
   }
   if(data.license){
     arryOfContents.push('License')
   }
   if(data.contribute){
    arryOfContents.push('Contribute')
  }
  if(data.test){
    arryOfContents.push('Test')
  }
  let tOC
  for(let i = 0; i < arryOfContents.length; i++){
    tOC += `${i} ${arryOfContents[i]} <br />`
  }
  return tOC
}
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'Boost'){
    const licenseBadge = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
     return licenseBadge;
   }
   else if(license === 'Apache'){
     const licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
     return licenseBadge;
   }
   else if(license === 'BSD-2'){
     const licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
     return licenseBadge;
   }
   else if(license === 'BSD-3'){
     const licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
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
   const licenseTxt = `This project is licensed by Boost`;
    return licenseTxt;
  }
  else if(license === 'Apache'){
    const licenseTxt = `This project is licensed by Apache`
    return licenseTxt;
  }
  else if(license === 'BSD-2'){
    const licenseTxt = `This project is licensed by BSD-2`
    return licenseTxt;
  }
  else if(license === 'BSD-3'){
    const licenseTxt = `This project is licensed by BSD-3`
    return licenseTxt;
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
   return `# License
    ${license}`
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const tOC = tableOfContents(data)
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseTxt = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(licenseTxt);
  return ( `# ${data.title}
  ${licenseBadge}
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  ${tOC}
  
  ## Installation Instructions
  ${data.install}
  
  ## Usage Info
  ${data.usage}
  
  ${licenseSection}

  ## How to Contribute
  ${data.contribute}
  
  ## Test Guidelines
  ${data.test}
  
  ## Questions
  * See my github at: ${data.gitHub}
  * Email me at: ${data.email}
  `);
}

module.exports = generateMarkdown;
