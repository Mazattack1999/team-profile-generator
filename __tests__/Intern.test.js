const Intern = require('../lib/Intern.js');

// Tests construction of Intern Object
test('Constructs Intern object', () => {
    const intern = new Intern("Jeff", 1, "jSmith@gmail.com", "UnOfW");

    const name = "Jeff";
    const id = 1;
    const email = "jSmith@gmail.com";
    const school = "UnOfW";

    expect(name).toBe(intern.name);
    expect(id).toEqual(intern.id);
    expect(email).toBe(intern.email);
    expect(school).toBe(intern.school);
});

test('Gets school of Intern', () => {
    const intern = new Intern("Jeff", 1, "jSmith@gmail.com", "UnOfW");

    const school = intern.getSchool();

    expect(school).toBe("UnOfW");
});

test('Gets role of Intern', () => {
    const intern = new Intern("Jeff", 1, "jSmith@gmail.com", "UnOfW");
    
    const role = intern.getRole();

    expect(role).toBe("Intern");
});