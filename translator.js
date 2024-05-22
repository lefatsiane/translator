let Translation = new Map(); // creating a map

Translation.set("hello", "molo"); // key , value pairs
Translation.set("bye-bye", "bhayi-bhayi");
Translation.set("bottle", "ibhotile");
Translation.set("cape", "ikapa");
Translation.set("sun", "ilanga");
Translation.set("moon", "inyanga");
Translation.set("laptop", "laptop");
Translation.set("table", "itafile");
Translation.set("chair", "isitulo");
Translation.set("corner", "ikona");

let userInput = prompt(`type the word you want translated to Xhosa`); // user is prompted to enter key
let value = Translation.get(userInput); // code returns a value from the key/value pair. 

console.log(`${value} is Xhosa for ${userInput}`); // reads out the the final output
