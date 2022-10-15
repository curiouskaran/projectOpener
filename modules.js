require("dotenv").config({ path: __dirname + "/.env" });
const initialOptions = process.env.INITIAL_COMMANDS.split(",");

module.exports = {
	questions: [
		{
			name: "TASK_TYPE",
			type: "list",
			message: "what you want to do?",
			choices: initialOptions,
		},
		{
			name: "TASK_TARGET",
			type: "list",
			message: "Select the project",
			choices: function (previousAnswer) {
				const options = process.env[previousAnswer.TASK_TYPE].split(",,");
					for (let i = 0; i < options.length; i++) {
						options[i] = JSON.parse(options[i]);
					}
				return options;
			},
		},
		{
			name: "ACTION",
			type: "list",
			message: "Please choose a command from the list",
			choices: function (previousAnswer) {
				return process.env[previousAnswer.TASK_TARGET].split(",");
			}
		},
	],
};