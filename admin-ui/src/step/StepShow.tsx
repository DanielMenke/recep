import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { INGREDIENT_TITLE_FIELD } from "../ingredient/IngredientTitle";
import { STEP_TITLE_FIELD } from "./StepTitle";
import { RECIPE_TITLE_FIELD } from "../recipe/RecipeTitle";

export const StepShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Positon" source="positon" />
        <ReferenceField label="Rezept" source="recipe.id" reference="Recipe">
          <TextField source={RECIPE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="StepIngredient"
          target="StepId"
          label="Schrittzutat"
        >
          <Datagrid rowClick="show">
            <TextField label="Menge" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Ingredient"
              source="ingredient.id"
              reference="Ingredient"
            >
              <TextField source={INGREDIENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Step" source="step.id" reference="Step">
              <TextField source={STEP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Unit" source="unit" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
