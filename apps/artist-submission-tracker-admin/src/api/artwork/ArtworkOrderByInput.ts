import { SortOrder } from "../../util/SortOrder";

export type ArtworkOrderByInput = {
  artistId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  file?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
