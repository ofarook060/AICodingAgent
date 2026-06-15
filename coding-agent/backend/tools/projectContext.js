import fs from "fs/promises";

export async function projectContext(
  files
) {
  const output = [];

  for (const file of files) {
    try {
      const content =
        await fs.readFile(
          file,
          "utf8"
        );

      output.push({
        file,
        content:
          content.slice(0, 3000)
      });
    } catch {}
  }

  return output;
}