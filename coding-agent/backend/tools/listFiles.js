import fs from "fs/promises";

export async function listFiles(
  directory
) {
  try {
    const files =
      await fs.readdir(directory, {
        withFileTypes: true
      });

    return {
      success: true,
      files: files.map((item) => ({
        name: item.name,
        type: item.isDirectory()
          ? "directory"
          : "file"
      }))
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}