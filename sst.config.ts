import { SSTConfig } from "sst";
import { DevStack } from "./stacks/dev-stack";

export default {
  config(_input) {
    return {
      name: "resume",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app
      .stack(DevStack)
  },
} satisfies SSTConfig;