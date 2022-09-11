const prompt = require("prompt-sync")();
let selectionChoice = false;

function goals() {
    //console.log("You made it to the Goals Function");
    selectionChoice = true;
    selectionChoice = false;
    let myGoals = ["Not Set", "Not Set", "Not Set"];
    let goalLength = ["Short Term:", "Weekly:", "Long Term"];
    do{
        console.log("My Goals: \n What would you like to do? \n 1. View Goals \n 2. Edit Goals \n 3. Return home");
        let goalSelection = prompt();
        if (goalSelection == "1" || goalSelection == 'view'){
            console.log("My Goals:");
            for(let x = 0; x < myGoals.length; x++){
                console.log(`${goalLength[x]} ${myGoals[x]}`);
            };
        } else if (goalSelection == "2" || goalSelection == "edit"){

        } else if (goalSelection == "3" || goalSelection == "home"){
            mainScreen();
        }else {
            console.log("Im sorry, please enter 1, 2, 3, view, edit, or home")
        }
    }while (!selectionChoice);
}
function workout() {
    console.log("You made it to the Workout Function");
    selectionChoice = true;
}
function mainScreen(){
    selectionChoice = true;
    selectionChoice = false;
    do {
        //prompt the user to input: looking for Goals, Workout, 1 or 2
        console.log(
            "Hello! what would you like to do? \n 1. View/Edit Goals \n 2. View/Edit Workout \n 3. Exit"
        );
        let selection = prompt();
        
        if (selection == "1" || selection == "goals") {
            goals();
        } else if (selection == "2" || selection == "workout") {
            workout();
        } else if (selection == "3" || selection == "exit"){
            console.log("Goodbye!");
            selectionChoice = true;
        }else {
            console.log("Im sorry, please enter 1, 2, 3, goals, workout, or exit");
        }
    } while (!selectionChoice);
}

mainScreen();