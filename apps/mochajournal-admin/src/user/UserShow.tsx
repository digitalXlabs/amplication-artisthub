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

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UserRoles" source="userRoles" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="Journal"
          target="userId"
          label="Journals"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
