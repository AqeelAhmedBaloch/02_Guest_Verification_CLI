#! /usr/bin/env node
import inquirer from "inquirer";

console.log('=============================================');
console.log(`Welcome to My CLI Guests Verification Project`);
console.log('=============================================');

let myLoop = true;

let myInvitedGuestsList = ['waseem','aqeel','naseer','wajid','areeb','murtaza','omair','amman'];

while(myLoop){
    let userInput = await inquirer.prompt({
        type: "input",
        name:'userName',
        message: 'Please enter your name: '
    });
    let guestName = userInput.userName;
    let lowerGuestName = guestName.toLowerCase();
    //let {userName} = userInput;   // destrcturing
    if(myInvitedGuestsList.includes(lowerGuestName)){
        console.log(`Welcome Mr. ${guestName} please, make yourself confortable`);
        myLoop = false;
    }
    else{
        console.log(`Sorry, Mr. ${guestName}. Your name is not on the guest list for today.\n`);

        let askNameAgain = await inquirer.prompt({
            type: 'confirm',
            name:'otherName',
            message:'Do you have another name you go by? if so, we can check again!',
            default: false
        })

        if(!askNameAgain.otherName){
            myLoop = false;
            console.log(`\nWe apologize, but you are not on the guest list. Please contact the event organizer.\n`)
        }
    }
}