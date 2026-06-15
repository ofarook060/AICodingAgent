import { askLlama } from "./llama";

export async function sendPrompt(
  prompt: string
) {
  return askLlama([
    {
      role: "system",
      content: `
You are a coding assistant.

You can:
- Explain code
- Generate code
- Refactor code
- Debug code
`
    },

    {
      role: "user",
      content: prompt
    }
  ]);
}