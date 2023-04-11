
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

function init() {
    console.log('App initialized.');

//  an array of questions for user input
const questions = [
    {
        type: 'input',
        name:'title',
        message: 'Project title?',
    },
    {
        type: 'input',
        name:'description',
        message: 'Project description?',
    },
    {
        type: 'input',
        name:'installation',
        message: 'Installation instructions?',
    },
    {
        type: 'input',
        name: 'howToUse',
        message: 'How to use?',
      },
    {
        type: 'input',
        name: 'test',
        message: 'How to test?',
      },
      
    {
        type: 'input',
        name:'contribution',
        message: 'Contribution instructions?',
    },
    {
        type: 'input',
        name:'email',
        message: 'For questions(email)?',
    },
    {
        type: 'input',
        name:'github',
        message: 'For questions(github)?',
    },
    {
        type: 'list',
        name:'license',
        message: 'License?',
        choices:['MIT','ISC','GNUPLv3','None'],
        filter(val){
            return val.toLowerCase();
        } 
    },
];

//run query func
 function runQuery() {
    return inquirer.prompt(questions)
    .then((answers)=> {
        console.log(answers);
        return answers;
    })
    .catch((error)=> {
        console.log(error);
    });
}


//  a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('README file created successfully!')
    })
}
//calls the runQuery function to start the inquirer prompt
runQuery().then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile('README.md', readmeContent);
});

}
//  a function to initialize app
function initializeApp() {
    init();
}

//  Function call to initialize app
function start() {
    initializeApp();
  }
  
  start();
  
