import { SortOrder } from "../../util/SortOrder";

export type CommandOrderByInput = {
  commandName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  parameters?: SortOrder;
  updatedAt?: SortOrder;
};
