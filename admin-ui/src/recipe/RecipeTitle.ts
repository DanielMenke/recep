import { Recipe as TRecipe } from "../api/recipe/Recipe";

export const RECIPE_TITLE_FIELD = "id";

export const RecipeTitle = (record: TRecipe): string => {
  return record.id || record.id;
};
