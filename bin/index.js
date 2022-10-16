#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const executeTerminalCommands = require("../helpers/commands.js").executeTerminalCommands
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
    init();
    const answers = await askQuestions();
    console.log(answers);
  };
  
  run();

