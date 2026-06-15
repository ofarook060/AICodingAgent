import fs from "fs/promises";

export async function readFile(path) {
  try {
    const content =
      await fs.readFile(path, "utf8");

    return {
      success: true,
      content
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}