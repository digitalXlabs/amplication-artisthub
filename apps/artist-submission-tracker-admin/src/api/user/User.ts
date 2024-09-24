export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  roles?: Array<"Option1">;
  updatedAt: Date;
  userRoles?: Array<"Option1">;
  username: string | null;
};
