import { SortOrder } from "../../util/SortOrder";

export type ArtistOrderByInput = {
  artistStatements?: SortOrder;
  bioData?: SortOrder;
  bioPdf?: SortOrder;
  createdAt?: SortOrder;
  cvData?: SortOrder;
  cvPdf?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
