import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { INGREDIENT_TITLE_FIELD } from "../ingredient/IngredientTitle";
import { STEP_TITLE_FIELD } from "../step/StepTitle";

export const StepIngredientList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Schrittzutat"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
