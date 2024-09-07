import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type HistoryWhereInput = {
  commandRecord?: JsonFilter;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
};
