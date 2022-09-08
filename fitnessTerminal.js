//Create a Prompt for the program
const prompt = require('prompt-sync')();
let selectionChoice = false;

//Welcome the user and ask them to choose what they want to do
console.log('Hello! what would you like to do? \n 1. View/Edit Goals \n 2. View/Edit Workout');
do{
    //prompt the user to input: looking for Goals, Workout, 1 or 2
    let selection = prompt();
    //console.log(selectionChoice);
    /* Error checking for Prompt
    * Selection should be: 1, 2, Goals, Workout
    */
    if(selection.length === 1){
        selection = Number(selection);
        if(selection === 1 || selection === 2){
            selectionChoice = true;
            //console.log(selectionChoice);
        }
    }else{
        if(selection === 'goals' || selection === 'workout'){
            selectionChoice = true;
        }
    }
    selectionChoice === false ? console.log('Im sorry, please enter 1, 2, goals, or workout'):console.log('');
    //console.log(selectionChoice);
    //error check: console.log(`You chose ${selection}`);
    //selection = Number(selection);

    switch(selection){
        case 1:
            goals();
            break;
        case 2:
            workout();
            break;
        case 'goals':
            goals();
            break;
        case 'workout':
            workout();
            break;
}
}while(selectionChoice === false);

function goals(){
    console.log('You made it to the Goals Function');
}
function workout(){
    console.log('You made it to the Workout Funciton');
}