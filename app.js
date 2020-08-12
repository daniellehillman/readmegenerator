
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown')


// array of questions for user
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please enter your Project title: ',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please provide a description of your application: ',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Installation Instructions: ',
      name: 'installation',
    },

    {
      type: 'input',
      message: 'Usage Information: ',
      name: 'usage',
    },

    {
      type: 'input',
      message: 'Any contribution guidelines: ',
      name: 'contributions',
    },

    {
      type: 'list',
      message: 'What is your License?',
      choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "None"],
      name: 'license',
    },
    {
        type: 'input',
        message: 'Any tests instructions: ',
        name: 'test',
      },
      {
        type: 'input',
        message: 'What is your GitHub username? ',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email address? ',
        name: 'email',
      },

  ])
  .then(answers => {
// function to write README file
    fs.writeFile('readMe1.md', generateMarkdown(answers), (err) => {
      if (err) { console.log(err) }
      console.log('File Created!')
    })
  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });