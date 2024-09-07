import { JsonValue } from "type-fest";

export type History = {
  commandRecord: JsonValue;
  createdAt: Date;
  id: string;
  timestamp: Date | null;
  updatedAt: Date;
};
