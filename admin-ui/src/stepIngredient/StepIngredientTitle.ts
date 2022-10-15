import { StepIngredient as TStepIngredient } from "../api/stepIngredient/StepIngredient";

export const STEPINGREDIENT_TITLE_FIELD = "unit";

export const StepIngredientTitle = (record: TStepIngredient): string => {
  return record.unit || record.id;
};
