import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";
import { StepIngredientUpdateManyWithoutStepsInput } from "./StepIngredientUpdateManyWithoutStepsInput";

export type StepUpdateInput = {
  positon?: number;
  recipe?: RecipeWhereUniqueInput | null;
  StepIngredients?: StepIngredientUpdateManyWithoutStepsInput;
};
