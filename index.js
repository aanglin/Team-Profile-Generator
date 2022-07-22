const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Html = require('./src/generate.html')
const teamArray = [];


const addEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your engineer name?',
      validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your engineer id?',
      validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your engineer email?',
      validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
    },  
    {
      type: 'input',
      name: 'github',
      message: 'What is your engineer github username?',
      validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
    }, 
    
    
  ]) .then(answer => {
    let engineer = new Engineer(answer.name, answer.id, answer.email,answer.github);
    teamArray.push(engineer);
    createTeam();
  })  
}
const addIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your intern name?',
      validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your intern id?',
      validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your intern email?',
      validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
    },  
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is your intern school name?',
      validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
    }, 
    
    
  ]) .then(answer => {
    let intern = new Intern(answer.name, answer.id, answer.email, answer.school);
    teamArray.push(intern);
    createTeam();
  })  
}
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your manager name?',
            validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
          },
        {
            type: 'input',
            name: 'id',
            message: 'What is your manager id?',
            validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
          },
        {
            type: 'input',
            name: 'email',
            message: 'What is your manager email?',
            validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
          },  
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your manager officeNumber?',
            validate: (value)=>{ if (value){return true}else {return 'You need a value to continue'}},
          }, 
       
          
        ]) .then(answer => {
            let manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
            teamArray.push(manager);
            createTeam();
    })  
        }
                       
    //                     function teamArrayHtml(teamArray) {
    //                     const arrayCard = teamArray.map(t => {
    //                       switch (t.role) {
    //                         case 'Manager':
    //                           return`
    //                           <div id="inline">
    //   <div class="card" id="tile" style="width: 18rem;">
    //     <div class="card-body">
    //       <h5 class="card-title">Manager</h5>
    //       <h6 class="card-subtitle mb-2 text-muted">${t.getName}</h6>
    //       <ul>
    //           <li>Id:${t.getId}</li>
    //           <li>Office Number:${t.getOfficeNumber}</li>
    //       </ul>
    //       <a href="mailto:${t.getEmail}" class="card-link">${t.getEmail}:</a>
    //     </div>
    // </div>
    // </div> `
         
    // case 'Engineer':
    //   return `
    //   <div id="inline">
    //   <div class="card"id="tile" style="width: 18rem;">
    //       <div class="card-body">
    //         <h5 class="card-title">Engineer</h5>
    //         <h6 class="card-subtitle mb-2 text-muted">${t.getName}</h6>
    //         <ul>
    //             <li>Id:${t.getid}</li>
    //         </ul>
    //         <a href="mailto:${t.getEmail}" class="card-link">${t.getEmail}<br
    //          href="https://github.com/" class="card-link">${t.getGithub}</a>
    //       </div>
    //     </div> 
    //   </div> `

    //   case 'Intern':
    //     return `
    //     <div id="inline">
    //   <div class="card"id="tile" style="width: 18rem;">
    //     <div class="card-body">
    //       <h5 class="card-title">Intern</h5>
    //       <h6 class="card-subtitle mb-2 text-muted">${t.getName}</h6>
    //       <ul>
    //           <li>Id:${t.getid}</li>
    //           <li>School: ${t.getSchool}</li>
    //       </ul>
    //       <a href="#" class="card-link">Email</a>
    //     </div>
    //   </div> 
    // </div> `
    //       // default:
    //       //   return results;                     
                         
    //       }
    //       })
    //       return arrayCard.join('');
          
    //     }

          const generateHTML = (teamArray) =>{
            return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
                <link rel="stylesheet" href="./style.css">
            </head>
            
            <body>
            
                <div class="jumbotron jumbotron-fluid" id= "work">
                    <div class="container">
                      <h1 class="display-4">Employee Template</h1>
                      <p class="lead">A place where dreams are realized and money is made.</p>
                    </div>
                  </div>
            
                  <div id="center-this">
                  ${teamArrayHtml(teamArray)}
                  </div>

                  <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                 <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
                 <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>
                 </body>
                 </html>
                 `;
              }

              const writeToFile = () => {
                // let generateHTML = generateHTML(data);
              return new Promise((resolve, reject) => {
                  fs.writeFileSync('./dist/index.html', Html(teamArray), err => {
                      if (err) {
                          reject(err);
                      }
          
                      resolve({
                          ok: true,
                          message: 'Page generated!'
                      });
                  });
              });
          };

                         function createTeam(){
                          inquirer.prompt([
                              {
                              type: "list",
                              name: "role",
                              message: "What type of employee would you like to add?",
                              choices: [
                                  "Engineer",
                                  "Intern",
                                  "Manager",
                                  "None"
                              ]
                              }
                          ]).then(answer => {
                              switch(answer.role){
                                  case "Engineer":
                                      addEngineer();
                                      break;
                      
                                  case "Intern":
                                      addIntern();
                                      break;
                      
                                  case "Manager":
                                      addManager();
                                      break;
                      
                                  default:
                                      console.log(teamArray);
                                      writeToFile(); 
                              }; 
                          });
                      
                      }
                      
                      createTeam();


         
         
         
         
         
         
         
         
         
         









                      
                
                
                
                
                
                
                
                
                