import { Ingredient as TIngredient } from "../api/ingredient/Ingredient";

export const INGREDIENT_TITLE_FIELD = "id";

export const IngredientTitle = (record: TIngredient): string => {
  return record.id || record.id;
};
