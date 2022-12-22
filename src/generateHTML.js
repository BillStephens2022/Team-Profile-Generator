/* cardsArray will hold the HTML cards generated by the team data.  Each employee on 
the team will have its own card and is an element of the array */

let cardsArray = [];

// function to generate the Manager card

function generateManagerCard(manager){
  return `
  <div class="col s12 m4 l4">
  <div class="card hoverable blue accent-1 white-text">
    <h2 class="card-title deep-orange">${manager.name}</h2>
    <h5><i class="fa-solid fa-bullhorn"></i> Manager <i class="fa-solid fa-bullhorn"></i></h5>
    <p>ID: ${manager.id}</p>
    <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
    <p>Office Number: ${manager.officeNumber}</p>
  </div>
</div>
  `
}

// function to generate an Engineer card

function generateEngineerCard(engineer){
  return `
  <div class="col s12 m4 l4">
  <div class="card hoverable blue accent-1 white-text">
    <h2 class="card-title deep-orange">${engineer.name}</h2>
    <h5><i class="fa-solid fa-glasses"></i> Engineer <i class="fa-solid fa-glasses"></i></h5>
    <p>ID: ${engineer.id}</p>
    <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
    <p>Github Profile: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
  </div>
</div>
  `
}

// function to generate an Intern card

function generateInternCard(intern){
  return `
  <div class="col s12 m4 l4">
  <div class="card hoverable blue accent-1 white-text">
    <h2 class="card-title deep-orange">${intern.name}</h2>
    <h5><i class="fa-solid fa-graduation-cap"></i> Intern <i class="fa-solid fa-graduation-cap"></i></h5>
    <p>ID: ${intern.id}</p>
    <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
    <p>School: ${intern.school}</p>
  </div>
</div>
  `
}

/* function to kick off card generation using the team data.  Depending on the employee type, it will generate 
different cards.  Each card is then pushed into the cardsArray. */

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


// function generates the full web page showing the entire team profile using the cards generated from previous functions.

function generateHTML(teamData) {     
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
  
      <!-- Google Fonts -->
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;900&family=Ubuntu&display=swap" rel="stylesheet">
      <!-- Materialize CSS -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      <!-- Font Awesome icons -->
      <script src="https://kit.fontawesome.com/d65ade391a.js" crossorigin="anonymous"></script>
        <!-- Customized CSS -->
      <link rel="stylesheet" href="../dist/style.css">
    </head>
    <body class="blue accent-1">
      <div class="header valign-wrapper blue accent-1">
        <h1 class="white-text center-align">Team Profile</h1>
      </div>
      <div class="row blue-grey darken-4" id="user-info">
       
        ${generateCards(teamData)}
        
      </div>
  
      
      <!-- Materialize CSS javascript -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
    </html>
      `
}
    
// exports function to be used in the index.js

module.exports = generateHTML;
