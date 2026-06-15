import { askLlama } from "./llama";
import * as tools from "./tools";

export async function runAgent(
  userPrompt: string
) {
  const systemPrompt = `
You are a coding agent.

Available tools:

read_file(path)

list_files(path)

search_files(root, query)

execute_command(command)

write_file(path, content)



IMPORTANT:

When a tool is needed respond ONLY with JSON.

Example:

{
  "tool":"read_file",
  "path":"/sdcard/project/package.json"
}

or

{
  "tool":"list_files",
  "path":"/sdcard/project"
}

Do not explain.
Do not use markdown.
Only output JSON.
`;

  const firstResponse =
    await askLlama([
      {
        role: "system",
        content: systemPrompt
      },
      {
        role: "user",
        content: userPrompt
      }
    ]);

  return firstResponse;
}