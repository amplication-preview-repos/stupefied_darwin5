import { InputJsonValue } from "../../types";

export type HistoryCreateInput = {
  commandRecord?: InputJsonValue;
  timestamp?: Date | null;
};
