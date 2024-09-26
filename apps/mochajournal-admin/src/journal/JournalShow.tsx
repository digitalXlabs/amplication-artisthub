import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const JournalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="BrewMethod" source="brewMethod" />
        <TextField label="BrewTime" source="brewTime" />
        <TextField label="CoffeeName" source="coffeeName" />
        <TextField label="Content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="CreatedBy" source="createdBy" />
        <TextField label="GrindSize" source="grindSize" />
        <TextField label="ID" source="id" />
        <TextField label="Notes" source="notes" />
        <TextField label="Rating" source="rating" />
        <TextField label="RoastDate" source="roastDate" />
        <TextField label="Roaster" source="roaster" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="WaterTemperature" source="waterTemperature" />
      </SimpleShowLayout>
    </Show>
  );
};
