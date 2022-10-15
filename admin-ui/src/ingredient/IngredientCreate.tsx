import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { StepIngredientTitle } from "../stepIngredient/StepIngredientTitle";

export const IngredientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="schrittzutat"
          reference="StepIngredient"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StepIngredientTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
