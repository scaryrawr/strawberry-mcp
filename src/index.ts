import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { countLetterOccurrences } from "./letterCounter";

// Create an MCP server
const server = new McpServer({
  name: "Letter Counter",
  version: "1.0.0",
});

// Add a tool to count letter occurrences in a word
server.tool(
  "count-letters",
  { word: z.string(), letter: z.string().length(1) },
  async ({ word, letter }) => {
    const count = countLetterOccurrences(word, letter);
    return {
      content: [
        {
          type: "text",
          text: `The letter '${letter}' appears ${count} times in '${word}'.`,
        },
      ],
    };
  }
);

// Start the server with stdio transport
const transport = new StdioServerTransport();
server.connect(transport).then(() => {
  console.log("Letter Counter MCP server is running...");
});
