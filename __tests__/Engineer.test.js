const Engineer = require('../lib/Engineer.js');

// test creation of Engineer object
test('Creates Engineer object', () => {
    const eng = new Engineer("Jeff", 1, "jSmith@gmail.com", "jgithub");

    const name = "Jeff";
    const id = 1;
    const email = "jSmith@gmail.com";
    const github = "jgithub";

    expect(name).toBe(eng.name);
    expect(id).toEqual(eng.id);
    expect(email).toBe(eng.email);
    expect(github).toBe(eng.github)
});

test('Gets github of Engineer', () => {
    const eng = new Engineer("Jeff", 1, "jSmith@gmail.com", "jgithub");

    const github = eng.getGithub();

    expect(github).toBe(`https://github.com/${eng.github}`);
});

test('Gets role of Engineer', () => {
    const eng = new Engineer("Jeff", 1, "jSmith@gmail.com", "jgithub");

    const role = eng.getRole();

    expect(role).toBe("Engineer");
});