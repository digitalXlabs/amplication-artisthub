import { JournalCreateNestedManyWithoutUsersInput } from "./JournalCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  journals?: JournalCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  userRoles?: Array<"admin" | "user">;
  username: string;
};
