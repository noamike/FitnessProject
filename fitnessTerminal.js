//Create a Prompt for the program
const prompt = require('prompt-sync')();

//Welcome the user and ask them to choose what they want to do
console.log('Hello! what would you like to do? \n 1. View/Edit Goals \n 2. View/Edit Workout');
//prompt the user to input: looking for Goals, Workout, 1 or 2
let selection = prompt();
//error check: console.log(`You chose ${selection}`);
//selection = Number(selection);

switch(selection){
    case 1:
        goals();
        break;
    case 2:
        workout();
        break;
}

function goals(){
    console.log('You made it to the Goals Function');
}
function workout(){
    console.log('You made it to the Workout Funciton');
}