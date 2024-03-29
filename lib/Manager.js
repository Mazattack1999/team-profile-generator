const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNum){
        super(name, id, email);

        this.officeNum = officeNum;
    }

    // get role of Manager
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;