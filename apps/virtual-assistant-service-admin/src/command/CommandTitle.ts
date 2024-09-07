import { Command as TCommand } from "../api/command/Command";

export const COMMAND_TITLE_FIELD = "commandName";

export const CommandTitle = (record: TCommand): string => {
  return record.commandName?.toString() || String(record.id);
};
