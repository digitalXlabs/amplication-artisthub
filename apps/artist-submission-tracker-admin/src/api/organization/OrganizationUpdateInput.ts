import { SubmissionUpdateManyWithoutOrganizationsInput } from "./SubmissionUpdateManyWithoutOrganizationsInput";

export type OrganizationUpdateInput = {
  name?: string | null;
  submissions?: SubmissionUpdateManyWithoutOrganizationsInput;
  typeField?: "Option1" | null;
};
