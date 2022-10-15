import { StepIngredient } from "../stepIngredient/StepIngredient";

export type Ingredient = {
  createdAt: Date;
  id: string;
  schrittzutat?: Array<StepIngredient>;
  updatedAt: Date;
};
