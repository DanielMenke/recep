import { Step } from "../step/Step";

export type Recipe = {
  createdAt: Date;
  id: string;
  steps?: Array<Step>;
  updatedAt: Date;
};
