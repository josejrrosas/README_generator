
var fs = require("fs");
const inquirer = require('inquirer');
const { title } = require("process");

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
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
            name: 'usage',
            message: 'What uses does your application have?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Are contributions welcome?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license is your application covered under?',
            choices: ['MIT', 'GPL', 'BSD'],
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username',
        },
    ])

    .then((data) => {
        const readme = `
# ${data.title}
![GitHub License](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Description

${data.description}

## Table of Contents

*[Installation](#installation)

*[Usage](#usage)

*[License](#license)

*[Contributing](#contributing)

*[Tests](#tests)

*[Questions](#questions)

## Installation 

${data.installation}

## Usage

${data.usage}

## License 

This Project is licensed under the ${data.license} license.

## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. 
You can find more more of my work at [${data.name}](https://github.com/${data.github}).
      `;
      
        fs.writeFile('README.md', readme, function (err) {
            if (err) {
                return console.log(err);
            }
      
            console.log('Success!');
        });
      })