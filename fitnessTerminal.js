const prompt = require("prompt-sync")();
let selectionChoice = false;

function goals() {
    console.log("You made it to the Goals Function");
    selectionChoice = true;
}
function workout() {
    console.log("You made it to the Workout Function");
    selectionChoice = true;
}

do {
    //prompt the user to input: looking for Goals, Workout, 1 or 2
    console.log(
        "Hello! what would you like to do? \n 1. View/Edit Goals \n 2. View/Edit Workout"
    );
    let selection = prompt();
    
    if (selection == "1" || selection == "goals") {
        goals();
    } else if (selection == "2" || selection == "workout") {
        workout();
    } else {
        console.log("Im sorry, please enter 1, 2, goals, or workout");
    }
} while (!selectionChoice);
