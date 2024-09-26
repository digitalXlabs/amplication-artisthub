import { SortOrder } from "../../util/SortOrder";

export type JournalOrderByInput = {
  brewMethod?: SortOrder;
  brewTime?: SortOrder;
  coffeeName?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  grindSize?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  rating?: SortOrder;
  roastDate?: SortOrder;
  roaster?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  waterTemperature?: SortOrder;
};
