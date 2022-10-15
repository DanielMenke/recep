import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { IngredientTitle } from "../ingredient/IngredientTitle";
import { StepTitle } from "../step/StepTitle";

export const StepIngredientCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Menge" source="amount" />
        <ReferenceInput
          source="ingredient.id"
          reference="Ingredient"
          label="Ingredient"
        >
          <SelectInput optionText={IngredientTitle} />
        </ReferenceInput>
        <ReferenceInput source="step.id" reference="Step" label="Step">
          <SelectInput optionText={StepTitle} />
        </ReferenceInput>
        <TextInput label="Unit" source="unit" />
      </SimpleForm>
    </Create>
  );
};
