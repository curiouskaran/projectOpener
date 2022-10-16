let exec = require("child_process").exec;
const chalk = require("chalk");
require("dotenv").config({ path: __dirname + "/.env" });

function generateCommand(answers){
    const taskType = answers.TASK_TYPE.toLowerCase();
    const taskTarget = answers.TASK_TARGET.toLowerCase();
    const action = answers.ACTION.toLowerCase();
}
// allows us to execute terminal commands from here
function executeTerminalCommands(command) {
	exec(command, (error, stdout, stderr) => {
		if (error) {
			console.log(chalk.red(`${error}`));
		} else {
			console.log(chalk.green(stdout));
		}
	});
}

function envObjectsParser(envObjects){
	console.log("input", envObjects);
	let parsedOptions = [];
	if(envObjects.includes(",,")){
		parsedOptions = envObjects.split(",,");
		for (let i = 0; i < parsedOptions.length; i++) {
			parsedOptions[i] = envObjectParser(parsedOptions[i]);
		}
	}else {
		parsedOptions = envObjectParser(envObjects);
		console.log("else op", parsedOptions);
	}
	return [parsedOptions];
}

function envObjectParser(envObject){
	return JSON.parse(envObject);
}

// function collectDataTypes(){
// 	return 
// }

module.exports = { executeTerminalCommands, envObjectsParser };
