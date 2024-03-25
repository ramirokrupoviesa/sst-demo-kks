import { StackContext, Api, Table } from "sst/constructs";

export function API({ stack }: StackContext) {
  const table = new Table(stack, "Notes", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: { partitionKey: "noteId", sortKey: "userId" },
  });

  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
    defaults: {
      function: { bind: [table] },
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
