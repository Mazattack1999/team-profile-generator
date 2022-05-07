// require inquirer for asking user questions
const inquirer = require('inquirer');
// require file system
const fs = require('fs');

// require 3 child classes
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

// require generateHTML 
const generateHTML = require('./src/generateHTML.js');

// employees array of objects constructed using classes
const employees = [];

// ask user about manager properties
const promptManager = () => {
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email address?"
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "What is the team manager's office number?"
        }
    ];

    return inquirer
    .prompt(questions)
    .then((data) => createEmployee(data, "Manager"));
}

const promptEngineer = () => {
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?"
        }
    ]

    return inquirer
    .prompt(questions)
    .then(data => createEmployee(data, "Engineer"))
    .then(data => determineNextStep());
}

const promptIntern = () => {
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the interns's employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the interns's email address?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What school is the intern attending?"
        }
    ]

    return inquirer
    .prompt(questions)
    .then(data => createEmployee(data, "Intern"))
    .then(data => determineNextStep());
}

const determineNextStep = () => {
    const questions = [
        {
            type: 'list',
            name: 'action',
            message: "What would you like to do next?",
            choices: ["Add an engineer", "Add an intern", "Finish building my team"],
            // default: "Finish building my team"
        }
    ]

    return inquirer
    .prompt(questions)
    .then(act => {
        const {action} = act;

        // call function depending on selected action
        switch (action) {
            case "Add an engineer": 
                return promptEngineer();

            case "Add an intern":
                return promptIntern();

            case "Finish building my team":
                return;
        }
        
        
    })
}

// create employee 
const createEmployee = (employeeData, role) => {
    // get name, id, and email from employee data
    const { name, id, email } = employeeData;

    // get officeNum, github, or school from employee data depending on what role the employee has
    switch (role) {
        case "Manager":
           const { officeNum } = employeeData;
           return employees.push(new Manager(name, id, email, officeNum));
        
        case "Engineer": 
            const { github } = employeeData;
            return employees.push(new Engineer(name, id, email, github));

        case "Intern": 
            const { school } = employeeData;
            return employees.push(new Intern(name, id, email, school));
    }
}

// write files using file system
const writeFile = (file, data) => {
    fs.writeFile(file, data, err => {
        if (err) {
            console.log(err);
        }
    })
}


// inquirer prompt beginning
promptManager()
.then(data => determineNextStep())
.then(data => writeFile('./dist/index.html', generateHTML(employees)));