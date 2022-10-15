import { StringFilter } from "../../util/StringFilter";
import { StepIngredientListRelationFilter } from "../stepIngredient/StepIngredientListRelationFilter";

export type IngredientWhereInput = {
  id?: StringFilter;
  schrittzutat?: StepIngredientListRelationFilter;
};
