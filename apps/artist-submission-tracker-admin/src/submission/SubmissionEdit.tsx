import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { ArtworkTitle } from "../artwork/ArtworkTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const SubmissionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="artwork.id" reference="Artwork" label="Artwork">
          <SelectInput optionText={ArtworkTitle} />
        </ReferenceInput>
        <DateTimeInput label="Deadline" source="deadline" />
        <NumberInput label="Fee" source="fee" />
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
