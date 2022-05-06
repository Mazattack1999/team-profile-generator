const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // get github of Engineer
    getGithub() {
        return `https://github.com/${this.github}`;
    }

    // Get role of engineer
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;