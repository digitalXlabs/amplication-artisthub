import { SortOrder } from "../../util/SortOrder";

export type SubmissionOrderByInput = {
  artworkId?: SortOrder;
  createdAt?: SortOrder;
  deadline?: SortOrder;
  fee?: SortOrder;
  id?: SortOrder;
  organizationId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
