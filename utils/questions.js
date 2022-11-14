// Set up user questions
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub Username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project.',
  },
  {
    type: 'list',
    name: 'licence',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install your project?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'How do you test your project?',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your project?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?',
  },
]

module.exports = questions;
