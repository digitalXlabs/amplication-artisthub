import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { ArtworkTitle } from "../artwork/ArtworkTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const SubmissionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
