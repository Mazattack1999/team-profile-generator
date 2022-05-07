// generate employee cards to be added to base html
const generateCards = (array) => {
    const cards = array.map(emp => {
        // check what type of employee
        switch (emp.getRole()) {
            case "Manager": 
                return `
                <div class="card">
                    <div class="card-title">
                        <h2>${emp.getName()}</h2>
                        <p><i class="fa-solid fa-mug-hot"></i> Manager</p> 
                    </div>

                    <div class="card-content">
                        <p class="card-id">ID: ${emp.getId()}</p>
                        <p class="card-email">Email: <a href="mailto: ${emp.getEmail()}">${emp.getEmail()}</a></p>
                        <p class="card-special-info">Office Number: ${emp.officeNum}</p>
                    </div>
                </div>
                `
            case "Engineer": 
                return `
                    <div class="card">
                        <div class="card-title">
                            <h2>${emp.getName()}</h2>
                            <p><i class="fa-solid fa-glasses"></i> Engineer</p> 
                        </div>

                        <div class="card-content">
                            <p class="card-id">ID: ${emp.getId()}</p>
                            <p class="card-email">Email: <a href="mailto: ${emp.getEmail()}">${emp.getEmail()}</a></p>
                            <p class="card-special-info">GitHub: <a href=${emp.getGithub()}>${emp.github}</a></p>
                        </div>
                    </div>
                    `

            case "Intern": 
                return `
                    <div class="card">
                        <div class="card-title">
                            <h2>${emp.getName()}</h2>
                            <p><i class="fa-solid fa-user-graduate"></i> Intern</p> 
                        </div>

                        <div class="card-content">
                            <p class="card-id">ID: ${emp.getId()}</p>
                            <p class="card-email">Email: <a href="mailto: ${emp.getEmail()}">${emp.getEmail()}</a></p>
                            <p class="card-special-info">School: ${emp.getSchool()}</p>
                        </div>
                    </div>
                    `
        }
    })

    return cards.join('');
}

// generate all base html
const generateHTML = (array) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link href="./style.css" rel="stylesheet">
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
    
        <main>
            <section class="container">
                ${generateCards(array)}
            </section>
        </main>
        
    </body>
    </html>`
}



// export generateHTML 
module.exports = generateHTML;