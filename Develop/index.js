// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// An array of questions for user input
const questions = [
// this question is for Github username input
    {
    type:'input',
    name:'github',
    message:'What is your Github username?',
},

// this question is for email address input
{
    type:'input',
    name:'email',
    message:'What is your email address?',
},

// this question is for project name input
{
    type:'input',
    name:'title',
    message:'What is the name of the project?'
},

// this question is for project description input
{
    type:'input',
    name:'description',
    message:'Write a short description of the project',
},

// this question is for selecting license input
{
    type:'input',
    name:'license',
    message:'What kind of license will you use? (n/a for none)',
    choices: ['MIT', 'APACHE 2.0','GPL3.0','BSD 3', 'n/a' ],
},

// this question is for selecting install command input
{
    type:'input',
    name:'installation',
    message:'What command should be run to install dependancies? (npm i is the default)',
    default: 'npm i',
},

// this question is for selecting which command to run tests input
{
    type:'input',
    name:'testing',
    message:'What command to run tests? (default is npm test)',
    default:'npm test',
},

// this question is for repo description/use input
{
    type:'input',
    name:'useage',
    message:'What does the user need to know about using the repository?',
},

// this question is for project contribution description/use input
{
    type:'input',
    name:'contributing',
    message:'What does the user need to know about contributing to this project?'
},

// this question is for general notes about the project input
{
    type:'input',
    name:'notes',
    message:'Any other notes about this project?'
},
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          return console.log(err);
        }
        console.log('README.md file successfully created!');
      });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((res) => {
        console.log(res);
        writeToFile('./README.md', generateMarkdown(res));
    });
}

// Function call to initialize app
init();
