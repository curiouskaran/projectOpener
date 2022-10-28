require("dotenv").config({ path: __dirname + "/.env" });
const envObjectsParser = require("./helpers/commands").envObjectsParser;
const collectDataTypes = require("./helpers/commands").collectDataTypes;
let optionsDataTypes = {};

module.exports = {
	questions: [
		{
			name: "TASK_TYPE",
			type: "list",
			message: "what do you want to do?",
			choices: () => {
				options = envObjectsParser(process.env.InitialCommands);
				optionsDataTypes = {...optionsDataTypes, ...collectDataTypes(options)};
				console.log("options data returned", optionsDataTypes);
				return options;
			},
		},
		{
			name: "TASK_TARGET",
			type: "list",
			message: "project?",
			choices: function (previousAnswer) {
				console.log(previousAnswer);
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