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

module.exports = { executeTerminalCommands };
