import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  admin?: boolean | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  subscriptionCount?: number | null;
  username?: string;
};
