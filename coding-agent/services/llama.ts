import axios from "axios";

const LLAMA_URL =
  "http://127.0.0.1:8080";

export async function askLlama(
  messages: any[]
) {
  const response = await axios.post(
    `${LLAMA_URL}/v1/chat/completions`,
    {
      model: "qwen2.5-coder",
      messages,
      temperature: 0.2,
      stream: false
    }
  );

  return response.data.choices[0]
    .message.content;
}