import { InputJsonValue } from "../../types";

export type HistoryUpdateInput = {
  commandRecord?: InputJsonValue;
  timestamp?: Date | null;
};
