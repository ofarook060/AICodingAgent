import express from "express";
import cors from "cors";

import { readFile } from "./tools/readFile.js";
import { writeFile } from "./tools/writeFile.js";
import { searchFiles } from "./tools/searchFiles.js";
import { listFiles } from "./tools/listFiles.js";
import { executeCommand } from "./tools/executeCommand.js";
import { gitStatus } from "./tools/gitStatus.js";

const app = express();

app.use(cors());

app.use(express.json({
  limit: "20mb"
}));

app.get("/", (_, res) => {
  res.json({
    status: "ok"
  });
});

app.post(
  "/tools/read",
  async (req, res) => {
    res.json(
      await readFile(
        req.body.path
      )
    );
  }
);

app.post(
  "/tools/write",
  async (req, res) => {
    res.json(
      await writeFile(
        req.body.path,
        req.body.content
      )
    );
  }
);

app.post(
  "/tools/search",
  async (req, res) => {
    res.json(
      await searchFiles(
        req.body.root,
        req.body.query
      )
    );
  }
);

app.post(
  "/tools/list",
  async (req, res) => {
    res.json(
      await listFiles(
        req.body.path
      )
    );
  }
);

app.post(
  "/tools/exec",
  async (req, res) => {
    res.json(
      await executeCommand(
        req.body.command
      )
    );
  }
);

app.post(
  "/git/status",
  async (req, res) => {
    res.json(
      await gitStatus(
        req.body.repoPath
      )
    );
  }
);

app.listen(3000, () => {
  console.log(
    "Agent backend running on :3000"
  );
});