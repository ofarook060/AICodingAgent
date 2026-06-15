import { spawn } from "child_process";

export async function executeCommand(
  command
) {
  return new Promise(
    (resolve) => {
      const process =
        spawn("sh", [
          "-c",
          command
        ]);

      let stdout = "";
      let stderr = "";

      process.stdout.on(
        "data",
        (data) => {
          stdout +=
            data.toString();
        }
      );

      process.stderr.on(
        "data",
        (data) => {
          stderr +=
            data.toString();
        }
      );

      process.on(
        "close",
        (code) => {
          resolve({
            success:
              code === 0,
            code,
            stdout,
            stderr
          });
        }
      );
    }
  );
}