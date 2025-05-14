[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/scaryrawr-strawberry-mcp-badge.png)](https://mseep.ai/app/scaryrawr-strawberry-mcp)

# Letter Counter MCP Server (strawberry-mcp)

This is an LLM generated mcp server using the instructions from [Building MCP with LLMs](https://modelcontextprotocol.io/tutorials/building-mcp-with-llms).

It's purpose is to solve the strawberry LLM problem as a joke/learning example.

## Prompt

The original prompt referenced the [llms-full.md](./docs/llms-full.md) and [typescript-sdk README](./docs/typescript-sdk-README.md) for guidance on building the MCP server.

The prompt was as follows:

```md
We're going to build an MCP server. We can look at `llms-full.md` for some general guidance and examples. `typescript-sdk-README.md` to understand the typescript-sdk for MCP.

Build an MCP server that:

- Enables the LLM to count letter occurrences in a word
- It should provide a tool that the LLM can pass a word + the letter they want to count

We should keep the code well organized. We should add unit tests. Please setup build and test scripts in the package.json. We should be able to test the letter counter without having to run the MCP server.

We should be able to have the LLM do something like:

count strawberry r and get back 3.
```
