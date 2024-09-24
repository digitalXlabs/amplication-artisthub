import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ARTWORK_TITLE_FIELD } from "../artwork/ArtworkTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";

export const SubmissionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Submissions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Artwork" source="artwork.id" reference="Artwork">
          <TextField source={ARTWORK_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Deadline" source="deadline" />
        <TextField label="Fee" source="fee" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
