const fs = require('fs');
const inquirer = require('inquirer')
const Employee = require('Employee')
const Manager = require('Manager')
const Engineer = require('Engineer')
const Intern = require('Intern')

const teamArray = [];

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
            let Manager = new Manager(answer.name, answer.id, answer.email, "Manager", answer.officeNumber);
            teamArr.push(Manager);
            createTeam();
    })  
        }
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
                    let Engineer = new Engineer(answer.name, answer.id, answer.email, "Engineer", answer.officeNumber);
                    teamArr.push(Engineer);
                    createTeam();
            })  
                }
                const Intern = () => {
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
                            let Intern = new Intern(answer.name, answer.id, answer.email, "Intern", answer.school);
                            teamArr.push(Intern);
                            createTeam();
                    })  
                        }
                        const writeToFile = data => {
                            const generatedHTML = generateHTML(data);
                            return new Promise((resolve, reject) => {
                                fs.writeFile('../dist/generated.html', generatedHTML, err => {
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
    