
var fs = require("fs");
const inquirer = require('inquirer');
const { title } = require("process");

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your application repository?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your application.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the instructions to your application?',
        },
        {
            type: 'input',
            name: 'uses',
            message: 'What uses does your application have?',
        },
        {
            type: 'input',
            name: 'contributers',
            message: 'Who contributed to your application?',
        },
        {
            type: 'input',
            name: 'contributers',
            message: 'Who contributed to your application?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license is your application covered under?',
            choices: ['MIT', 'blah', 'blah'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your email',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your github username',
        },
    ])

    .then((data) => {
        const readme = `
         
      `;
      
        fs.writeFile('README.md', readme, function (err) {
            if (err) {
                return console.log(err);
            }
      
            console.log('Success!');
        });
      })