const Employee = require('./Employee.js');

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    // Get school of Intern
    getSchool() {
        return this.school;
    }

    // Get role of Intern
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;