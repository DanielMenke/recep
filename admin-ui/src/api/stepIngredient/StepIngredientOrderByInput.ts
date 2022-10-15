import { SortOrder } from "../../util/SortOrder";

export type StepIngredientOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  ingredientId?: SortOrder;
  stepId?: SortOrder;
  unit?: SortOrder;
  updatedAt?: SortOrder;
};
