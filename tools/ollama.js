import fetch from "node-fetch";

export async function ollamaChat(agent, message) {

const prompt = `
Agent: ${agent.name}

Role:
${agent.personality}

User:
${message}
`;

const response = await fetch("http://localhost:11434/api/generate", {
method: "POST",
body: JSON.stringify({
model: "llama3",
prompt: prompt,
stream: false
})
});

const data = await response.json();

return data.response;

}