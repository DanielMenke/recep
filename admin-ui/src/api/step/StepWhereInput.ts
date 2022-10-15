import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";
import { StepIngredientListRelationFilter } from "../stepIngredient/StepIngredientListRelationFilter";

export type StepWhereInput = {
  id?: StringFilter;
  positon?: IntFilter;
  recipe?: RecipeWhereUniqueInput;
  StepIngredients?: StepIngredientListRelationFilter;
};
