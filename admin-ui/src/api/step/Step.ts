import { Recipe } from "../recipe/Recipe";
import { StepIngredient } from "../stepIngredient/StepIngredient";

export type Step = {
  createdAt: Date;
  id: string;
  positon: number;
  recipe?: Recipe | null;
  StepIngredients?: Array<StepIngredient>;
  updatedAt: Date;
};
