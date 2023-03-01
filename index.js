const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
        type: 'input',
        name: 'project name',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What was the motivation for this program?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps to install this program?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How do we use this application?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List creators of application here.',
    },
    {
        type: 'input',
        name: 'contributers',
        message: 'What are the rules for future contributers?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Type test instructions here.',
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'leave an email for people to ask questions.',
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Leave your github for people to ask questions.',
    },
    {
        type: 'input',
        name: 'liscense',
        message: 'liscense here',
    },
])
.then((data) => 
fs.writeFile('README.md', devPage(data), (err) => {
    err ? console.log(err): console.log('success')
})
);

const READMEmd = 
`# ${data.name},

## Description

${data.name},

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Badges](#badges)
- [Features](#features)
- [Contributers](#contributers)
- [Test](#test)
- [Questions](#questions)
- [License](#license)

## Installation

${data.name},

## Usage

${data.name},

## Credits

${data.name},

## Badges

${data.name},

## Features

${data.name},

## How to Contribute

${data.name},

## Tests

${data.name},

## Questions

${data.name},

## License

${data.name},
`