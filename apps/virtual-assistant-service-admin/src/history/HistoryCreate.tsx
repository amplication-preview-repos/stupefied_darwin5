import * as React from "react";
import { Create, SimpleForm, CreateProps, DateTimeInput } from "react-admin";

export const HistoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};
