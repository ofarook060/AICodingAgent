import fs from "fs/promises";
import { glob } from "glob";

export async function searchFiles(
  root,
  query
) {
  try {
    const files = await glob(
      `${root}/**/*.*`
    );

    const matches = [];

    for (const file of files) {
      try {
        const content =
          await fs.readFile(
            file,
            "utf8"
          );

        if (
          content
            .toLowerCase()
            .includes(
              query.toLowerCase()
            )
        ) {
          matches.push(file);
        }
      } catch {}
    }

    return {
      success: true,
      matches
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}