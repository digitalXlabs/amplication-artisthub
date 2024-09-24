import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ArtworkTitle } from "../artwork/ArtworkTitle";
import { ProjectTitle } from "../project/ProjectTitle";

export const ArtistCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="ArtistStatements"
          multiline
          source="artistStatements"
        />
        <ReferenceArrayInput source="artworks" reference="Artwork">
          <SelectArrayInput
            optionText={ArtworkTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="BioData" multiline source="bioData" />
        <div />
        <TextInput label="CvData" multiline source="cvData" />
        <div />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput source="projects" reference="Project">
          <SelectArrayInput
            optionText={ProjectTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
