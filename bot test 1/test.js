// Install first: npm install express cors openai dotenv
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { OpenAI } from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  const completion = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      { role: "system", content: "შენ ხარ ChatGG — მეგობრული, తెలివიანი ქართულად მომუშავე AI." },
      { role: "user", content: userMessage }
    ]
  });

  res.json({ reply: completion.choices[0].message.content });
});

app.listen(3000, () => console.log("✅ ChatGG მუშაობს: http://localhost:3000"));
