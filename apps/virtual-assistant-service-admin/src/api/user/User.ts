import { JsonValue } from "type-fest";

export type User = {
  admin: boolean | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  role?: "Option1" | null;
  roles: JsonValue;
  subscriptionCount: number | null;
  updatedAt: Date;
  username: string;
};
