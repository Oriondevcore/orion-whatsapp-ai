import { mintaka } from "./agents/mintaka.js";
import { bolt } from "./agents/bolt.js";

export async function runAgent(agent, message) {

console.log(`Agent: ${agent.name}`);
console.log(`Input: ${message}`);

const response = await ollamaChat(agent, message);

return response;

}