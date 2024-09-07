import { InputJsonValue } from "../../types";

export type CommandUpdateInput = {
  commandName?: string | null;
  parameters?: InputJsonValue;
};
