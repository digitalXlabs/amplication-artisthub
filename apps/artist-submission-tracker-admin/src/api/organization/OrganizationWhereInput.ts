import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SubmissionListRelationFilter } from "../submission/SubmissionListRelationFilter";

export type OrganizationWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  submissions?: SubmissionListRelationFilter;
  typeField?: "Option1";
};
