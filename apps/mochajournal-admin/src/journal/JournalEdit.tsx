import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  NumberInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const JournalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="brewMethod"
          label="BrewMethod"
          choices={[
            { label: "Espresso", value: "Espresso" },
            { label: "French Press", value: "FrenchPress" },
            { label: "Pour Over", value: "PourOver" },
            { label: "AeroPress", value: "AeroPress" },
            { label: "Drip", value: "Drip" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="BrewTime" source="brewTime" />
        <TextInput label="CoffeeName" source="coffeeName" />
        <TextInput label="Content" multiline source="content" />
        <TextInput label="CreatedBy" source="createdBy" />
        <SelectInput
          source="grindSize"
          label="GrindSize"
          choices={[
            { label: "Fine", value: "Fine" },
            { label: "Espresso", value: "Espresso" },
            { label: "Filter/Drip", value: "FilterDrip" },
            { label: "Coarse", value: "Coarse" },
          ]}
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
    </Edit>
  );
};
