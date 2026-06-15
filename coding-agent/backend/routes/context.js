import express from "express";

import { readDirectoryRecursive }
from "../tools/readDirectoryRecursive.js";

import { projectContext }
from "../tools/projectContext.js";

const router = express.Router();

router.post(
  "/project-context",
  async (req, res) => {
    const files =
      await readDirectoryRecursive(
        req.body.root
      );

    const context =
      await projectContext(files);

    res.json(context);
  }
);

export default router;