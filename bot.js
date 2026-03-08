const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("AI WhatsApp is ready");
});

import { detectIntent } from "./router.js";

client.on("message", async (message) => {
  const intent = detectIntent(message.body);

  if (intent === "hotel_demo") {
    message.reply(
      "🏨 Orion Hotel Suite Demo\n\n" +
        "Hello! This is our AI hotel concierge demo.\n\n" +
        "How can I assist you?\n\n" +
        "1️⃣ Check room availability\n" +
        "2️⃣ Room prices\n" +
        "3️⃣ Spa services",
    );
  } else {
    message.reply(
      "Hello 👋 I'm Mintaka.\n\n" +
        "I help businesses implement AI systems.\n\n" +
        "How can Orion Dev Core assist you?",
    );
  }
});

client.initialize();
