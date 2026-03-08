import readline from "readline";

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question("You: ", async (msg) => {

const response = await askMintaka(msg);

console.log("Mintaka:", response);

});