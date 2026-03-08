const knowledge = searchKnowledge(message);

const prompt = `
You are Bolt, a hotel AI concierge.

Hotel Information:
${knowledge}

Guest Question:
${message}
`;