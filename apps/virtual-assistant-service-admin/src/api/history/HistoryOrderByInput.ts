import { SortOrder } from "../../util/SortOrder";

export type HistoryOrderByInput = {
  commandRecord?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
