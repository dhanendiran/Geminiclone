import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyD-cebZiuuoHBSceFT6kpxA8cqd_sUMgRA"

const ai = new GoogleGenerativeAI(apiKey);

async function main(prompt) {
  try {
    const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    console.log(text);
    return text;
  } catch (err) {
    console.error(err);
  }
  return response.text();
  
}

export default main;