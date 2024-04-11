import { StackContext, Function } from "sst/constructs";

export function StackParaBorrar({ stack }: StackContext) {
  const fn = new Function(stack, "api", {
    handler: "packages/functions/src/lambda.handler",
  });

  stack.addOutputs({
    FunctionEndpoint: fn.url,
  });
}
