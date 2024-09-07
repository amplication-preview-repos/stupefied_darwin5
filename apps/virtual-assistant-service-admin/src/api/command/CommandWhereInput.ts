import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type CommandWhereInput = {
  commandName?: StringNullableFilter;
  id?: StringFilter;
  parameters?: JsonFilter;
};
