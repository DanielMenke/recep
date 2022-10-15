import { StringFilter } from "../../util/StringFilter";
import { StepListRelationFilter } from "../step/StepListRelationFilter";

export type RecipeWhereInput = {
  id?: StringFilter;
  steps?: StepListRelationFilter;
};
