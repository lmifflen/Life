const readlineSync = require("readline-sync");

let player = readlineSync.question('What is your name? ')
console.log('Welcome to the game of life ' + player + '!');

let hobby = readlineSync.question('Would you like to bike, swim, or craft for your childhood hobby? ') 
        if (hobby === 'bike') {
            let pads = readlineSync.question('Do you want to where pads while you bike? ')
            if (pads == 'no')
            console.log(player + ' is a bad ass and does not wear safety pads.');
            else
            console.log(player + ' loves sports and safety!');
        }
        if (hobby === 'swim') {
            console.log(player + ' loves swimming!');
        }
        if (hobby === 'crafts') {
            console.log(player + ' is lame and likes crafts');
        }
            
        
  
if (hobby === 'bike') {
    let subject = readlineSync.question('What is your favourite subject in school? Physics, Gym, or Schools for fools ')
        if (subject === 'Gym' || subject === 'Physics') {
            console.log(player + "'s" + " favourite subject in school is " + subject);
        }
            console.log(player + ' is a high school drop out');
                   
}
if (hobby === 'swim') {
    let subject = readlineSync.question('What is your favourite subject in school? Gym, Law, or Math? ')
         if (subject === 'Gym' || 'Math' || 'Law') {
            console.log(player + "'s" + " favourite subject in school is " + subject);
    }
}
if (hobby === 'crafts') {
    let subject = readlineSync.question('What is your favourite subject in school? English, Biology, or going to be a rockstar ')
        if (subject === 'English' || subject === 'Biology') {
            console.log(player + "'s" + " favourite subject in school is " + subject);
        }
            console.log(player + ' dropped out of high school to become a rockstar');
        }
    