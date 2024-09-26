import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  NumberInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const JournalCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="brewMethod"
          label="BrewMethod"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="BrewTime" source="brewTime" />
        <TextInput label="CoffeeName" source="coffeeName" />
        <TextInput label="Content" multiline source="content" />
        <SelectInput
          source="grindSize"
          label="GrindSize"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Notes" multiline source="notes" />
        <NumberInput step={1} label="Rating" source="rating" />
        <DateTimeInput label="RoastDate" source="roastDate" />
        <TextInput label="Roaster" source="roaster" />
        <TextInput label="Title" source="title" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput label="WaterTemperature" source="waterTemperature" />
      </SimpleForm>
    </Create>
  );
};
