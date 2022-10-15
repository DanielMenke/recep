import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";
import { StepIngredientCreateNestedManyWithoutStepsInput } from "./StepIngredientCreateNestedManyWithoutStepsInput";

export type StepCreateInput = {
  positon: number;
  recipe?: RecipeWhereUniqueInput | null;
  StepIngredients?: StepIngredientCreateNestedManyWithoutStepsInput;
};
