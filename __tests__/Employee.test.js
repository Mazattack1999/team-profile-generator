const Employee = require('../lib/Employee.js');

// testing employee object creation
test('Creates an employee object', () => {
    const em = new Employee('Jeff', 1, 'jSmith@gmail.com');

    const name = "Jeff";
    const id = 1;
    const email = "jSmith@gmail.com"

    expect(em.name).toBe(name);
    expect(em.email).toBe(email);
    expect(em.id).toEqual(id);
});

test('Gets employee name', () => {
    const em = new Employee('Jeff', 1, 'jSmith@gmail.com');

    const name = em.getName();

    expect(em.name).toBe(name);
});

test('Gets employee id', () => {
    const em = new Employee('Jeff', 1, 'jSmith@gmail.com');

    const id = em.getId();

    expect(em.id).toEqual(id);
});

test('Gets employee email', () => {
    const em = new Employee('Jeff', 1, 'jSmith@gmail.com');

    const email = em.getEmail();

    expect(em.email).toBe(email);
});

test('Gets employee role', () => {
    const em = new Employee('Jeff', 1, 'jSmith@gmail.com');

    const role = em.getRole();

    expect(role).toBe("Employee");
})