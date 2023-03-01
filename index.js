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
- [Contributers](#contributers)
- [Test](#test)
- [License](#license)

## Installation

${data.name},

## Usage

${data.name}

## Credits

${data.name},


## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here
## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
`