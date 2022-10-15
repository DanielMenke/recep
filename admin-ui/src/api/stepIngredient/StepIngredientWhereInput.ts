import { FloatFilter } from "../../util/FloatFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { IngredientWhereUniqueInput } from "../ingredient/IngredientWhereUniqueInput";
import { StepWhereUniqueInput } from "../step/StepWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StepIngredientWhereInput = {
  amount?: FloatFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  ingredient?: IngredientWhereUniqueInput;
  step?: StepWhereUniqueInput;
  unit?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
};
