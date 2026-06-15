import fs from "fs/promises";
import path from "path";

export async function readDirectoryRecursive(
  dir
) {
  const result = [];

  async function walk(current) {
    const entries =
      await fs.readdir(current, {
        withFileTypes: true
      });

    for (const entry of entries) {
      const full =
        path.join(
          current,
          entry.name
        );

      if (entry.isDirectory()) {
        await walk(full);
      } else {
        result.push(full);
      }
    }
  }

  await walk(dir);

  return result;
}