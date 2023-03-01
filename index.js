const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}}
    },
    {
        type: 'input',
        name: 'description',
        message: 'What was the motivation for this program?',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}}
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps to install this program?',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}}
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How do we use this application?',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}}
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List creators of application here.',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}}
    },
    {
        type: 'input',
        name: 'badges',
        message: 'What badges would you like displayed?',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}}
    },
    {
        type: 'input',
        name: 'features',
        message: 'What future features do you plan to implement?',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}}
    },
    {
        type: 'input',
        name: 'contributers',
        message: 'What are the rules for future contributers?',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}}
    },
    {
        type: 'input',
        name: 'test',
        message: 'Type test instructions here.',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}}
    },
    {
        type: 'input',
        name: 'questions',
        message: 'leave an email for people to ask questions.',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}}
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Leave your github for people to ask questions.',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}}
    },
    {
        type: 'input',
        name: 'liscense',
        message: 'What License did you use?',
        choies: ['the MIT License', 'The GPL License', 'apache License', 'GNU license', 'N/A', ] , 
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}}
    },
])
.then(({
    title,
    description,
    install,
    usage,
    credits,
    badges,
    features,
    contributers,
    test,
    questions,
    license,
}) => {

const template = 
`# ${title},

## Description

${description},

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

${install},

## Usage

${usage},

## Credits

${credits},

## Badges

${badges},

## Features

${features},

## How to Contribute

${contributers},

## Tests

${test},

## Questions

${questions},

## License

${license},`;

createNewFile(title, template);

});

function createNewFile(fileName, template){
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, template(data), (err)=>{
        if(err){
            console.log(err)
        }
        console.log('Your README has been generated')
    })
}
