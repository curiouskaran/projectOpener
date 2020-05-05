const projects ={ 
    "work": {
        "newJp": "~/work/projects/Static5/136_JP"
    },
    "learning": {
        "shopApp": "~/learning/flutter/playground/shops_app"
    }
};
module.exports =  {
    ...{...projects},
    "questions": [
        {
            "name": "PROJECT_TYPE",
            "type": "list",
            "message": "what you want to do?",
            "choices": ["work","learning"]
        },
        {
            "name": "COMMAND_NAME",
            "type": "list",
            "message": "Please choose a command from the list",
            "choices": ["open","runTest"]
        },
        {
            "name": "PROJECT_NAME",
            "type": "list",
            "message": "Select the project",
            "choices": function(currentAns) {
                const { PROJECT_TYPE } = currentAns;
                return Object.keys(projects[PROJECT_TYPE]);
            }
        }
    ]
}