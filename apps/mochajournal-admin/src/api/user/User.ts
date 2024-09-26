import { Journal } from "../journal/Journal";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  journals?: Array<Journal>;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userRoles?: Array<"admin" | "user">;
  username: string;
};
