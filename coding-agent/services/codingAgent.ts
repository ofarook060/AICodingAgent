import { askLlama } from "./llama";

import { executeTool }
from "./toolExecutor";

import { tryParseToolCall }
from "./jsonParser";

export async function codingAgent(
  prompt: string
) {
  const first =
    await askLlama([
      {
        role: "system",
        content: `
You are a coding agent.

Available tools:

read_file(path)

list_files(path)

search_files(root,query)

execute_command(command)

When a tool is needed
output JSON only.
`
      },
      {
        role: "user",
        content: prompt
      }
    ]);

  const toolCall =
    tryParseToolCall(first);

  if (!toolCall) {
    return first;
  }

  const toolResult =
    await executeTool(toolCall);

  const final =
    await askLlama([
      {
        role: "system",
        content:
          "You are a coding assistant."
      },

      {
        role: "user",
        content: prompt
      },

      {
        role: "assistant",
        content: JSON.stringify(
          toolCall
        )
      },

      {
        role: "user",
        content:
          "Tool Result:\n" +
          JSON.stringify(
            toolResult
          )
      }
    ]);

  return final;
}