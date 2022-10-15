import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { INGREDIENT_TITLE_FIELD } from "./IngredientTitle";
import { STEP_TITLE_FIELD } from "../step/StepTitle";

export const IngredientShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="StepIngredient"
          target="IngredientId"
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
