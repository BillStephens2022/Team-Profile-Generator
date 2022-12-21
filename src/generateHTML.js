
cardsArray = [];


function generateManagerCard(manager){
  return `
  <div class="col s12 m4 l4">
  <div class="card blue accent-1 white-text">
    <h2 class="card-title">${manager.name}</h2>
    <h5>Manager</h5>
    <p>ID: ${manager.id}</p>
    <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
    <p>Office Number: ${manager.officeNumber}</p>
  </div>
</div>
  `
}

function generateEngineerCard(engineer){
  return `
  <div class="col s12 m4 l4">
  <div class="card blue accent-1 white-text">
    <h2 class="card-title">${engineer.name}</h2>
    <h5>Engineer</h5>
    <p>ID: ${engineer.id}</p>
    <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
    <p>Github Profile: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
  </div>
</div>
  `
}

function generateInternCard(intern){
  return `
  <div class="col s12 m4 l4">
  <div class="card blue accent-1 white-text">
    <h2 class="card-title">${intern.name}</h2>
    <h5>Intern</h5>
    <p>ID: ${intern.id}</p>
    <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
    <p>School: ${intern.school}</p>
  </div>
</div>
  `
}

function generateCards(teamData) {
  
  for (let i = 0; i < teamData.length; i++) {
    if (teamData[i].getRole() === "Manager") {
      const managerCard = generateManagerCard(teamData[i]);
      cardsArray.push(managerCard);
    } 
    else if (teamData[i].getRole() === "Engineer") {
      const engineerCard = generateEngineerCard(teamData[i]);
      cardsArray.push(engineerCard);
    } else {
      console.log(teamData[i].name);
      const internCard = generateInternCard(teamData[i]);
      cardsArray.push(internCard);
    }
  }
  const cards = cardsArray.join('');
  return cards;
}




function generateHTML(teamData) {     
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>User Information</title>
  
      <!-- Google Fonts -->
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;900&family=Ubuntu&display=swap" rel="stylesheet">
      <!-- Materialize CSS -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <!-- Customized CSS -->
      <link rel="stylesheet" href="../dist/style.css">
    </head>
    <body>
      <div class="row blue" id="user-info">
        <h4 class="white-text accent-1-text">Team Profile</h4>
        ${generateCards(teamData)}
        
      </div>
  
      
      <!-- Materialize CSS javascript -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
    </html>
      `
}
    
module.exports = generateHTML;
