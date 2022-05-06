const Manager = require('../lib/Manager.js');

// testing manager object creation
test('Creates Manager object', () => {
    const man = new Manager("Jeff", 1, "jSmith@gmail.com", 3);

    const name = "Jeff";
    const id = 1;
    const email = "jSmith@gmail.com";
    const officeNum = 3;

    expect(man.name).toBe(name);
    expect(man.id).toEqual(id);
    expect(man.email).toBe(email);
    expect(man.officeNum).toEqual(officeNum);
});

test('Gets role of Manager', () => {
    const man = new Manager("Jeff", 1, "jSmith@gmail.com", 3);

    const role = man.getRole();

    expect(role).toBe("Manager");
});