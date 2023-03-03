const inquirer = require('inquirer');
const fs = require('fs');
const {renderLicenseBadge, renderLicenseText} = require('./utils/generateBadges')

// these are the prompts that will show in the command line.
inquirer
.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of this project?',
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
        name: 'email',
        message: 'Leave an email for people to ask questions.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Leave your github for people to ask questions.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What License did you use?',
        choices: ['MIT License', 'IBM license', 'apache license', 'GNU license', 'N/A', ] , 
    },
])
// this calls our functions to render the license info and badge along with creating the README.md
.then((data) => {
data.badge = renderLicenseBadge(data.license), 
data.licenseText = renderLicenseText(data.license),
fs.writeFile('DEMO-README.md', template(data), (err) => {
    err ? console.log(err) : console.log('README was succesful!')
})
});

// this is our template literal where the answers in the questions will fill it out
const template = ({title, description, install, usage, credits, badge, contributers, test, github, email, license, licenseText}) =>
`
${badge}

# ${title}

## Description

${description}

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

${install}

## Usage
How to Use this application:
${usage}

## Credits

${credits}

## How to Contribute
For future contributers these are the guidelines:

${contributers}

## Tests
How to test this project:

${test}

## Questions
If you have any questions feel free to reach me at
Github Username: 
- https://github.com/${github}

or

Email me at: 
- ${email}

## License

${license}
${licenseText}`;


