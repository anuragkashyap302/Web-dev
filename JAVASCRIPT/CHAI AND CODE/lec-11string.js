const name = "anurag"
const repocount = 50;
console.log(name + repocount + "anythig you want to concecte");

// new method
console.log(`hello my name is ${name} and my repocount is ${repocount}`);

const gameName = new String('down-hunter');
// bahut sare property hai same like cppp just read the documentation
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.charAt(0));
console.log(gameName.toUpperCase()); // original value change nahi hota hai boss
console.log(gameName.indexOf('h'));
console.log(gameName.substring(0 ,4)); // yaha pe negative kaam nahi karega
console.log(gameName.slice(0 ,4));
console.log(gameName.slice(-8 ,4)); // piche se chalu karega

const Meme = "   anurag "
console.log(Meme);
console.log(Meme.trim()); // mur do extra cheez ko

const url = "https://anuragkashyap.com/anu%20kashyap"
console.log( url.replace('%20' , '-')); // %20 ko khoj ke - se replace
console.log(url.includes('anurag')); // kya anurag hai sting me ture or flase output
console.log(gameName.split('-')); // kis ke basis pe split karna hai














