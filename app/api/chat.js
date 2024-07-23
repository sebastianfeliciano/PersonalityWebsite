import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { messages } = req.body;
    const userMessages = messages.map(msg => ({ role: msg.sender === "You" ? "user" : "assistant", content: msg.text }));

    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: userMessages,
      });

      const reply = completion.data.choices[0].message.content;
      res.status(200).json({ reply });
    } catch (error) {
      console.error("Error in ChatGPT API request:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
