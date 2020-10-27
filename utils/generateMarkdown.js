const inquirer = require("inquirer/lib/utils/utils");

function licenseBadge(license){
  if (license !== "None"){
    return `![github license](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return ""
};

function licenseLink(license){
  if (license !== "None"){
    return (`\n* [License] (#license)\n`)
  }
  return ""
};


// function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  ${licenseBadge(data.license)}

  ## Description 

  ${data.description}

  ## Table of Contents

  * [Installation] (#installation)

  * [Usage] (#usage)
    
    ${licenseLink(data.license)}

  * [Contributing] (#contributing)

  * [Test] (#test)

  * [Questions] (#questions)

  ## Installation 
  ${data.installDependencies}

  ## Usage 
  ${data.userInfo}

  ## License
  This project is licensed under the terms of ${data.license}

  ## Contributing
  ${data.userContributing}

  ## Test
  To run the test, run this command
  ${data.test}
  
  ## Questions
  If you have any questions, please contact me at 
  https://api.github.com/users/${data.github} or ${data.email}
`;
}

module.exports = generateMarkdown;
