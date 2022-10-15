#!/usr/bin/env node

//For asking interactive Questions
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const { exec } = require("child_process");
const { executeTerminalCommands } = require("../helpers/commands.js")
require("dotenv").config({ path: __dirname + "/.env" });
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
  

const run = async () => {
    //welcome note
    init();
    // console.log(JSON.parse(process.env.FOLLOWUP_COMMANDS))
    //ask question to open or run a command on project
    const answers = await askQuestions();
    console.log(answers);
    //run the command
  };
  
  run();

