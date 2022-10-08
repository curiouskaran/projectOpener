#!/usr/bin/env node

//For asking interactive Questions
const inquirer = require("inquirer");
//For beautiful colors in CLI
const chalk = require("chalk");
//For making text Banners 
const figlet = require("figlet");
//For executing native OS commands
const { exec } = require("child_process");
//Terminal commmands executor
const { executeTerminalCommands } = require("../helpers/commands.js")

const data = require('../modules');

const init = () => {
    console.log(
      chalk.green(
        figlet.textSync("Jamison", {
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
            executeTerminalCommands(`cd ${data[PROJECT_TYPE][PROJECT_NAME].path} && code .`);
            break;
        case "runTest":
            executeTerminalCommands(`cd ${data[PROJECT_TYPE][PROJECT_NAME].path} && gnome-terminal -x sh -c 'npm test' & disown`);
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
  };
  
  run();

