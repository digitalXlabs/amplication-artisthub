import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ArtistList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Artists"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="ArtistStatements" source="artistStatements" />
        <TextField label="BioData" source="bioData" />
        <TextField label="BioPdf" source="bioPdf" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="CvData" source="cvData" />
        <TextField label="CvPdf" source="cvPdf" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
