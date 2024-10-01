//Before we can run this program we have to type "npm ci" in the terminal
//Ignore this line, it is importing a library named prompt-sync
const prompt = require('prompt-sync')({ sigint: true });

let time = prompt('What should I set the timer to? ');
    let x = 0
    while (x < time){
        x++;
        console.log("Tick");
    }
console.log("BOOM!")