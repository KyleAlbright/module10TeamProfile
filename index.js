const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateHTML = require("./src/generateHTML");

buildTeamArr = [];

const questions = [

  function generateTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What is this employee's role?",
          name: "addTeamMember",
          choices: ["Manager", "Engineer", "Intern", "Team is complete!"],
        },
      ])
      .then(function (userInput) {
        if (userInput.addTeamMember === "Manager") {
          addManager();
        } else if (userInput.addTeamMember === "Engineer") {
          addEngineer();
        } else if (userInput.addTeamMember === "Intern") {
          addIntern();
        } else {
          buildWebPage();
        }
      });
    },

    function addManager() {
      inquirer
        .prompt([
          {
            type: "input",
            name: "managerName",
            message: "Please enter manager's name.",
            validate: (manNameCheck) => {
              if (manNameCheck) {
                return true;
              } else {
                console.log("Please enter manager's name.");
                return false;
              }
            },
          },

          {
            type: "input",
            name: "managerId",
            message: "Please enter manager's ID number.",
            validate: (manIdCheck) => {
              if (manIdCheck) {
                return true;
              } else {
                console.log("Please enter manager's ID number.");
                return false;
              }
            },
          },

          {
            type: "input",
            name: "managerEmail",
            message: "Please enter manager's Email.",
            validate: (manEmailCheck) => {
              if (manEmailCheck) {
                return true;
              } else {
                console.log("Please enter manager's Email.");
                return false;
              }
            },
          },

          {
            type: "input",
            name: "managerOffice",
            message: "Please enter manager's office number.",
            validate: (manOfficeCheck) => {
              if (manOfficeCheck) {
                return true;
              } else {
                console.log("Please enter manager's office number.");
                return false;
              }
            },
          },
        ])
        .then((response) => {
          const manager = new Manager(
            response.managerName,
            response.managerId,
            response.managerEmail,
            response.managerOffice
          );
          buildTeamArr.push(manager);
          generateTeam();
        });
    },
    function addEngineer() {
      inquirer
        .prompt([
          {
            type: "input",
            name: "engineerName",
            message: "Please enter engineer's name.",
            validate: (engNameCheck) => {
              if (engNameCheck) {
                return true;
              } else {
                console.log("Please enter engineer's name.");
                return false;
              }
            },
          },

          {
            type: "input",
            name: "engineerId",
            message: "Please enter engineer's ID number.",
            validate: (engIdCheck) => {
              if (engIdCheck) {
                return true;
              } else {
                console.log("Please enter engineer's ID number.");
                return false;
              }
            },
          },

          {
            type: "input",
            name: "engineerEmail",
            message: "Please enter engineer's Email.",
            validate: (engEmailCheck) => {
              if (engEmailCheck) {
                return true;
              } else {
                console.log("Please enter engineer's Email.");
                return false;
              }
            },
          },

          {
            type: "input",
            name: "engineerGithub",
            message: "Please enter engineer's github username.",
            validate: (engGithubCheck) => {
              if (engGithubCheck) {
                return true;
              } else {
                console.log("Please enter engineer's github username.");
                return false;
              }
            },
          },
        ])
        .then((response) => {
          const engineer = new Engineer(
            response.engineerName,
            response.engineerId,
            response.engineerEmail,
            response.engineerGithub
          );
          buildTeamArr.push(engineer);
          generateTeam();
        });
    },

    function addIntern() {
        inquirer
          .prompt([
            {
              type: "input",
              name: "internName",
              message: "Please enter intern's name.",
              validate: (intNameCheck) => {
                if (intNameCheck) {
                  return true;
                } else {
                  console.log("Please enter intern's name.");
                  return false;
                }
              },
            },
  
            {
              type: "input",
              name: "internId",
              message: "Please enter intern's ID number.",
              validate: (intIdCheck) => {
                if (intIdCheck) {
                  return true;
                } else {
                  console.log("Please enter intern's ID number.");
                  return false;
                }
              },
            },
  
            {
              type: "input",
              name: "internEmail",
              message: "Please enter intern's Email.",
              validate: (intEmailCheck) => {
                if (intEmailCheck) {
                  return true;
                } else {
                  console.log("Please enter intern's Email.");
                  return false;
                }
              },
            },
  
            {
              type: "input",
              name: "internSchool",
              message: "Please enter school that intern attends.",
              validate: (intSchoolCheck) => {
                if (intSchoolCheck) {
                  return true;
                } else {
                  console.log("Please enter school that intern attends.");
                  return false;
                }
              },
            },
          ])
          .then((response) => {
            const intern = new Intern(
              response.internName,
              response.internId,
              response.internEmail,
              response.internGithub
            );
            buildTeamArr.push(engineer);
            generateTeam();
          });
      }
    ]
    function buildWebPage (fileName, data) {
        fs.writeFile(fileName, data, (err) => {
            err ? console.log(err) : console.log("success")
        });
    }

    function init(){
        return inquirer.prompt(questions).then((htmlInfo) => {
            writeToFile("./dist/index.html", generateHTML(htmlInfo));
        });
    }

  init()

