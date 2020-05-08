const projects ={ 
    "work": {
        "newJp": {
            "path":"~/work/projects/Static5/136_JP",
            "commands": ['open', 'runTest']
            },
        "113": {
            "path":"~/work/projects/Static4/113",
            "commands": ['open']
            }
        },
    "learning": {
        "shopApp": {
            "path" : "~/learning/flutter/playground/shops_app",
            "commands": ['open']
        } 
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
            "name": "PROJECT_NAME",
            "type": "list",
            "message": "Select the project",
            "choices": function(currentAns) {
                const { PROJECT_TYPE } = currentAns;
                return Object.keys(projects[PROJECT_TYPE]);
            }
        },
        {
            "name": "COMMAND_NAME",
            "type": "list",
            "message": "Please choose a command from the list",
            "choices": function(currentAns) {
                const { PROJECT_TYPE, PROJECT_NAME } = currentAns;
                return projects[PROJECT_TYPE][PROJECT_NAME].commands;
                
            }
        }
    ]
}