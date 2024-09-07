import { JsonValue } from "type-fest";

export type Command = {
  commandName: string | null;
  createdAt: Date;
  id: string;
  parameters: JsonValue;
  updatedAt: Date;
};
