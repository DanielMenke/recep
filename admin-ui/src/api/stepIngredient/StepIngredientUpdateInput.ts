import { IngredientWhereUniqueInput } from "../ingredient/IngredientWhereUniqueInput";
import { StepWhereUniqueInput } from "../step/StepWhereUniqueInput";

export type StepIngredientUpdateInput = {
  amount?: number;
  ingredient?: IngredientWhereUniqueInput;
  step?: StepWhereUniqueInput;
  unit?: string | null;
};
