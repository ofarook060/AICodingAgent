import simpleGit from "simple-git";

export async function gitStatus(
  repoPath
) {
  try {
    const git =
      simpleGit(repoPath);

    const status =
      await git.status();

    return {
      success: true,
      status
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}