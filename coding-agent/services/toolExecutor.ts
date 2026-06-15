import {
  readFile,
  listFiles,
  searchFiles,
  executeCommand
} from "./tools";

export async function executeTool(
  toolCall: any
) {
  switch (toolCall.tool) {
    case "read_file":
      return readFile(
        toolCall.path
      );

    case "list_files":
      return listFiles(
        toolCall.path
      );

    case "search_files":
      return searchFiles(
        toolCall.root,
        toolCall.query
      );

    case "execute_command":
      return executeCommand(
        toolCall.command
      );

    case "write_file":
      return write_file(
        toolCall.path,
        toolCall.content
      );

    default:
      throw new Error(
        "Unknown tool"
      );
  }
}