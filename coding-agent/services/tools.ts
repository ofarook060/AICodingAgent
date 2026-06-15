import { api } from "./api";

export async function readFile(
  path: string
) {
  const response =
    await api.post(
      "/tools/read",
      { path }
    );

  return response.data;
}

export async function writeFile(
  path: string,
  content: string
) {
  const response =
    await api.post(
      "/tools/write",
      {
        path,
        content
      }
    );

  return response.data;
}

export async function listFiles(
  path: string
) {
  const response =
    await api.post(
      "/tools/list",
      { path }
    );

  return response.data;
}

export async function searchFiles(
  root: string,
  query: string
) {
  const response =
    await api.post(
      "/tools/search",
      {
        root,
        query
      }
    );

  return response.data;
}

export async function executeCommand(
  command: string
) {
  const response =
    await api.post(
      "/tools/exec",
      { command }
    );

  return response.data;
}