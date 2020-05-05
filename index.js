#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const data = require('./modules');
const { exec } = require("child_process");

const init = () => {
    console.log(
      chalk.green(
        figlet.textSync("WorkFlow", {
          horizontalLayout: "default",
          verticalLayout: "default"
        })
      )
    );
  }

const askQuestions = () => {
    const questions = data.questions;
    return inquirer.prompt(questions);
}

const runCommand = (answers) => {
    const { PROJECT_TYPE,COMMAND_NAME,PROJECT_NAME } = answers;

    switch (COMMAND_NAME) {
        case "open":
            exec(`cd ${data[PROJECT_TYPE][PROJECT_NAME]} && code .`);
            break;
        case "runTest":
            exec(`cd ${data[PROJECT_TYPE][PROJECT_NAME]} && gnome-terminal -x sh -c 'npm test' & disown`)
        default:
            break;
    }
}
  

const run = async () => {
    //welcome note
    init();
    //ask question to open or run a command on project
    const answers = await askQuestions();

    //run the command
    runCommand(answers);
    console.log('answers',answers['COMMAND_NAME']);
  };
  
  run();

