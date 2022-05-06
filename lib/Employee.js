// Employee parent class 
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // get name of Employee
    getName() {
        return this.name;
    }

    // get id of Employee
    getId() {
        return this.id;
    }

    // get email of Employee
    getEmail() {
        return this.email;
    }

    // get role of employee
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;