const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const Choices = require("inquirer/lib/objects/choices");
const path = require("path");



// array of questions for user
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your Github Username?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project. "
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project.",
        choices: ['GPL 3.0', 'BSD 3', 'Apache 2.0', 'MIT License', 'None']
    },
    {
        type: "input",
        name: "installDependencies",
        message: "What command should be run to install dependencies?"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?"
    },
    {
        type: "input",
        name: "userInfo",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "userContributing",
        message: "What does the user need to know about contributing to the repo?"
    },
];




// function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(), fileName), data) 
}


// function to initialize program
function init() {

    inquirer.prompt(questions).then((responses)=>{
        writeToFile("ReadMeExample.md", generateMarkdown({...responses}))
        console.log("Success! Your ReadMe.md file has been generated");
    })


};

// function call to initialize program
init();
