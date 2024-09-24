import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  artistId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
