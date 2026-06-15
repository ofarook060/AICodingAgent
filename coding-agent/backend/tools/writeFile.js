import fs from "fs/promises";

export async function writeFile(
  path,
  content
) {
  try {
    await fs.writeFile(
      path,
      content,
      "utf8"
    );

    return {
      success: true
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}