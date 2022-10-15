import { StepIngredientWhereInput } from "./StepIngredientWhereInput";
import { StepIngredientOrderByInput } from "./StepIngredientOrderByInput";

export type StepIngredientFindManyArgs = {
  where?: StepIngredientWhereInput;
  orderBy?: Array<StepIngredientOrderByInput>;
  skip?: number;
  take?: number;
};
