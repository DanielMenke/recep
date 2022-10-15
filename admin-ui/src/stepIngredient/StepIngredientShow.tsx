import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { INGREDIENT_TITLE_FIELD } from "../ingredient/IngredientTitle";
import { STEP_TITLE_FIELD } from "../step/StepTitle";

export const StepIngredientShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
