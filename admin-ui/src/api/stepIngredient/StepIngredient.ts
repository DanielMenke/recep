import { Ingredient } from "../ingredient/Ingredient";
import { Step } from "../step/Step";

export type StepIngredient = {
  amount: number;
  createdAt: Date;
  id: string;
  ingredient?: Ingredient;
  step?: Step;
  unit: string | null;
  updatedAt: Date;
};
