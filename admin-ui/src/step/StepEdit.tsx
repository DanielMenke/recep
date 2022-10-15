import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RecipeTitle } from "../recipe/RecipeTitle";
import { StepIngredientTitle } from "../stepIngredient/StepIngredientTitle";

export const StepEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Positon" source="positon" />
        <ReferenceInput source="recipe.id" reference="Recipe" label="Rezept">
          <SelectInput optionText={RecipeTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="StepIngredients"
          reference="StepIngredient"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StepIngredientTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
