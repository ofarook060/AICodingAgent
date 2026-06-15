coding-agent/
│
├── package.json
├── tsconfig.json
├── app.json
│
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── chat.tsx
│   ├── files.tsx
│   ├── terminal.tsx
│   └── settings.tsx
│
├── components/
│   ├── ChatMessage.tsx
│   ├── ChatInput.tsx
│   └── ToolCallCard.tsx
│
├── services/
│   ├── llama.ts
│   ├── agent.ts
│   └── api.ts
│
├── store/
│   └── chatStore.ts
│
├── types/
│   └── chat.ts
│
└── backend/
    ├── server.js
    ├── routes/
    │   ├── chat.js
    │   ├── tools.js
    │   └── terminal.js
    │
    └── tools/
        ├── readFile.js
        ├── writeFile.js
        ├── searchFiles.js
        └── executeCommand.js





Phase 1 (MVP)

Working features:

✅ Chat with llama.cpp

✅ Read files

✅ Write files

✅ Search project

✅ Execute Termux commands

✅ File explorer

✅ Streaming responses

Phase 2

Add:

Monaco Editor
Git integration
Diff viewer
Patch application



Phase 3

Add:

MCP Client
RAG
Agent memory
Multi-step autonomous tasks

I can generate the entire project in order:

package.json
app.json
tsconfig.json
backend/server.js
backend/tools/*
services/*
store/*
app/chat.tsx
app/files.tsx
app/terminal.tsx



Backend

backend/
│
├── server.js
├── tools/
│   ├── readFile.js
│   ├── writeFile.js
│   ├── executeCommand.js
│   └── searchFiles.js


Next files I would generate are:

backend/server.js
backend/tools/readFile.js
backend/tools/writeFile.js
backend/tools/searchFiles.js
backend/tools/executeCommand.js


Run Backend
   cd backend
   npm install
   node server.js

Output:

Agent backend running on :3000


Verify:

curl http://localhost:3000

Returns:

{
  "status": "ok"
}


Next Stage

The next files should be:

components/
├── FileTree.tsx
├── CodeEditor.tsx
├── DiffViewer.tsx
├── TerminalView.tsx

app/
├── editor.tsx

services/
├── agentLoop.ts
├── mcp.ts
├── rag.ts


These add:

✅ Real file explorer

✅ Code editor

✅ Terminal

✅ Autonomous tool calling

✅ MCP support

✅ Project-aware coding agent


Before proceeding further, there's an important issue to fix in the architecture.

Current Problem

An Expo app cannot directly browse arbitrary project folders, run shell commands, or access the Termux filesystem on Android due to sandbox restrictions.

The correct production architecture is:

Expo App
    ↓ HTTP/WebSocket
Node Agent Backend (Termux)
    ↓
Filesystem + Git + Shell + MCP
    ↓
llama.cpp

So the next step shouldn't be a local React Native file explorer—it should be a remote file explorer backed by the Termux server.


Next Major Upgrade

The next files I'd build are the pieces that make this a true coding agent:

MCP
services/mcp.ts
backend/mcp/client.js
Terminal Streaming
backend/ws/terminal.js
components/TerminalView.tsx
Git Support
backend/tools/gitDiff.js
backend/tools/gitCommit.js
backend/tools/gitLog.js
Diff Engine
components/DiffViewer.tsx
services/patch.ts
Codebase RAG
backend/indexer.js
backend/vectorStore.js
backend/retrieve.js


After this stage, your agent can:

✅ Read files

✅ List folders

✅ Search code

✅ Run shell commands

✅ Write files

✅ Use tool calling

That is the first point where it becomes a genuinely usable local coding agent. The next major upgrade would be multi-step planning (tool → tool → tool → answer) and project-context retrieval so the model can work across an entire codebase.

For your Samsung Galaxy A34 5G (Dimensity 1080, 8GB RAM) running llama.cpp in Termux, I'd choose models based on what you want the agent to do.

For a Coding Agent
Best Overall Balance

Qwen2.5-Coder

GGUF: Q4_K_M

Why:

Much smarter than 0.5B
Good at tool calling
Good at code editing
Usable on 8GB RAM
Faster than 7B models

Expected speed:

5-15 tokens/sec

depending on context size.

If You Want Real Coding Capability

Qwen2.5-Coder

GGUF:

Q4_K_M

Pros:

Much better reasoning
Better file editing
Better refactoring
Better Flutter code generation
Better React Native code generation

Cons:

Slower
Higher RAM usage

On 8GB RAM you'll likely need:

-c 2048
-ngl 0

and close other apps.

Best Agent Model Right Now

Qwen3

If available in GGUF.

Advantages:

Better instruction following
Better tool usage
Better planning
Better coding than most 3B models

This would be my first choice for a mobile coding agent today.

If You Want Maximum Quality

DeepSeek-R1

GGUF:

Q4_K_M

Excellent for:

debugging
architecture
reasoning
agent workflows

But slower than Qwen-Coder.

Models I Would Avoid
Current Model

Qwen2.5-Coder

Good for:

autocomplete
small snippets

Bad for:

tool calling
agents
multi-file edits
planning

Your agent will spend more time recovering from model mistakes than doing useful work.

Generic Tiny Models

Avoid:

1B Gemma variants
TinyLlama
1B coding models

for agent workflows.

My Recommended Setup

For your phone:

Everyday Use
Model:
Qwen2.5-Coder 3B Q4_K_M

Context:
4096

Temp:
0.2
Heavy Coding
Model:
Qwen2.5-Coder 7B Q4_K_M

Context:
2048
Best Agent Experience
Planner:
Qwen3 4B

Executor:
Qwen2.5-Coder 3B

In your architecture:

User
 ↓
Qwen3 4B
(creates plan)

 ↓

Tool Calls

 ↓

Qwen2.5-Coder 3B
(edits code)

Even on a phone, this dual-model approach often performs better than using a single larger model.

If I were building this on an A34 today

I'd replace the 0.5B model immediately with:

Qwen2.5-Coder (best practical choice)
Qwen3 (best agent/planning choice)
Qwen2.5-Coder (best coding quality if performance is acceptable)

The jump from 0.5B → 3B is enormous for tool-calling agents—much larger than the parameter count alone suggests.


Qwen2.5-Coder-3B-Instruct-GGUF is probably the sweet spot for your setup.

Qwen2.5-Coder

For a Samsung Galaxy A34 8GB + Termux + llama.cpp, I'd choose this over both the 0.5B and 7B versions.

Why it's a good fit
Compared to 0.5B

You'll see a huge improvement in:

✅ Following instructions

✅ Tool calling

✅ Multi-file code generation

✅ React Native / Expo development

✅ Flutter development

✅ Bug fixing

✅ Understanding project structure

Example:

Prompt:

Read package.json and explain dependencies

0.5B:

May hallucinate
May ignore tool call

3B:

Much more likely to:
1. Call read_file
2. Parse package.json
3. Give a sensible explanation
Compared to 7B

7B is better, but:

7B
↓
More RAM
More battery
More heat
Slower

On an 8GB phone, the 3B model feels much more responsive.

For an interactive coding agent:

Responsiveness > raw intelligence

most of the time.

Which Quantization?

I'd recommend:

First choice
Q4_K_M

Best balance.

Second choice
Q5_K_M

If it still fits comfortably.

Avoid
Q8_0

on your device unless you've tested memory headroom.

Q8 often doubles memory usage for relatively small quality gains.

Suggested llama.cpp Settings

Try:

./llama-server \
-m qwen2.5-coder-3b-instruct-q4_k_m.gguf \
-c 4096 \
-t 4 \
-ngl 0 \
--host 0.0.0.0 \
--port 8080

For Android CPU inference:

Context: 4096
Threads: 4–6
Temperature: 0.2
Top-p: 0.9
One thing I'd change in your agent

With the 3B model, stop asking it to invent tool calls from scratch.

Instead use a structured format like:

{
  "tool": "read_file",
  "path": "/sdcard/project/package.json"
}

and enforce JSON parsing.

3B is good enough for this.

0.5B often isn't.

What the 3B model can realistically do
Good at
Expo React Native apps
Flutter apps
Laravel CRUD
WordPress plugins
Reading multiple files
Refactoring components
Writing API endpoints
Generating TypeScript interfaces
Git commit messages
Agent tool usage
Weak at
Large architectural redesigns
20+ file coordinated changes
Complex autonomous planning
Long-context codebases (>20k tokens)

For those, retrieval (RAG) and tool support matter more than model size.

My recommendation

For your coding agent:

Model:
Qwen2.5-Coder-3B-Instruct-GGUF

Quant:
Q4_K_M

Context:
4096

Temperature:
0.2

Backend:
Node + MCP

Frontend:
Expo React Native

Agent:
Tool-calling + project retrieval

That combination should be powerful enough to build and maintain the coding-agent app itself directly on your phone.



