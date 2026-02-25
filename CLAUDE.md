# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**GitHub:** https://github.com/kazuki-uemoto/claude_sample

## Commands

```bash
# Start the server
node index.js
```

Node.js is installed at `C:\Program Files\nodejs\node.exe` (not in the default shell PATH — use the full path or invoke via `cmd //c node index.js`).

To kill the server on port 3000 (Windows):
```bash
cmd //c "taskkill /PID <pid> /F"
```

## Architecture

Single-file Node.js HTTP server (`index.js`) using the built-in `http` module. Listens on port 3000.

**Routes:**
- `GET /` — plain text `Hello, World!`
- `GET /api/hello` — JSON `{ "message": "Hello, World!" }`
- `GET /api/goodbye` — JSON `{ "message": "Goodbye, World!" }`
- `GET /api/time` — JSON `{ "time": "<ISO timestamp>" }`
- `POST /api/echo` — JSON `{ "echo": "<request body>" }`
