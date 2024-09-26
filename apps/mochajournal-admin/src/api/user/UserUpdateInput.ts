import { JournalUpdateManyWithoutUsersInput } from "./JournalUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  journals?: JournalUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userRoles?: Array<"admin" | "user">;
  username?: string;
};
