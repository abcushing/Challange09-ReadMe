// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
{
    type:'input',
    name:'github',
    message:'What is your Github username?',
},

{
    type:'input',
    name:'email',
    message:'What is your email address?',
},

{
    type:'input',
    name:'title',
    message:'What is the name of the project'
},

{
    type:'input',
    name:'description',
    message:'Write a short description of the project',
},

{
    type:'input',
    name:'license',
    message:'What kind of licnce will you use? (n/a for none)',
    choices: ['MIT', 'APACHE 2.0','GPL3.0','BSD 3', 'n/a' ],
},

{
    type:'input',
    name:'installation',
    message:'What command should be run to install dependancies? (npm i is the default)',
    default: 'npm i',
},

{
    type:'input',
    name:'testing',
    message:'What command to run tests (default is npm test)',
    default:'npm test',
},

{
    type:'input',
    name:'useage',
    message:'What does the user need to know about using the repository?',
},

{
    type:'input',
    name:'contributing',
    message:'what does the user need to know about contributing to this project?'
},

{
    type:'input',
    name:'notes',
    message:'Any other notes about this project?'
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          return console.log(err);
        }
        console.log('README.md file successfully created!');
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((res) => {
        console.log(res);
        writeToFile('./README.md', generateMarkdown(res));
    });
}

// Function call to initialize app
init();
