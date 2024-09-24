import { SubmissionCreateNestedManyWithoutOrganizationsInput } from "./SubmissionCreateNestedManyWithoutOrganizationsInput";

export type OrganizationCreateInput = {
  name?: string | null;
  submissions?: SubmissionCreateNestedManyWithoutOrganizationsInput;
  typeField?: "Option1" | null;
};
