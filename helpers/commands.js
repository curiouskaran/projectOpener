let exec = require("child_process").exec;
const chalk = require("chalk");

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
