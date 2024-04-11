import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

export default {
  config(input) {
    return {
      name: "demo-sst",
      region: "us-east-1",
      profile: input.stage === "prod" ? "strata-demo-prod" : "strata-demo-dev",
    };
  },
  stacks(app) {
    app.stack(API);
  },
} satisfies SSTConfig;
