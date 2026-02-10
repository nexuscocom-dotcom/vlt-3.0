
import { GoogleGenAI } from "@google/genai";

export const generateLoveMessage = async (): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a very short (max 30 words) English message, cute and romantic, for someone who just said YES to being my valentine. 
      Must end exactly with: "Call me soon at 034 93 801 32 - Jonathan".`,
    });
    return response.text || "You make me the happiest person alive! Call me soon at 034 93 801 32 - Jonathan ❤️";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "My heart is skipping a beat! Call me soon at 034 93 801 32 - Jonathan ❤️";
  }
};
