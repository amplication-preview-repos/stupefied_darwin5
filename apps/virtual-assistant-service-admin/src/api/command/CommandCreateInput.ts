import { InputJsonValue } from "../../types";

export type CommandCreateInput = {
  commandName?: string | null;
  parameters?: InputJsonValue;
};
