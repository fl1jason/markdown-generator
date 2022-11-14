const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');

// Write te completed markdown to a readme.md file
function writeToFile(markdown) {

    fs.writeFile('readme.md', markdown, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
    );
}

// Initialise and run the application
function init() {

    inquirer
        .prompt(questions)
        .then((answers) => {
            const markdown = generateMarkdown(answers);

            writeToFile(markdown);
        });
}

// Kick off the application
init();




