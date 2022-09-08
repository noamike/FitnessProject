//Create a Prompt for the program
const prompt = require('prompt-sync')();

//Welcome the user and ask them to choose what they want to do
let selection = prompt(`Hello! what would you like to do?
1. View/Edit Goals
2. View/Edit Runs
`);
console.log(`You chose ${selection}`);

