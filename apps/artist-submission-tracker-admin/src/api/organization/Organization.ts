import { Submission } from "../submission/Submission";

export type Organization = {
  createdAt: Date;
  id: string;
  name: string | null;
  submissions?: Array<Submission>;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
