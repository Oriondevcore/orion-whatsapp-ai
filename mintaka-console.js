import readline from "readline";
import { runAgent } from "./ai-core.js";
import { mintaka } from "./agents/mintaka.js";

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function ask(){

rl.question("Graham > ", async (msg)=>{

const response = await runAgent(mintaka, msg);

console.log("Mintaka >", response);

ask();

});

}

ask();