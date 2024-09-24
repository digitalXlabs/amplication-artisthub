import { ArtworkWhereUniqueInput } from "../artwork/ArtworkWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SubmissionWhereInput = {
  artwork?: ArtworkWhereUniqueInput;
  deadline?: DateTimeNullableFilter;
  fee?: FloatNullableFilter;
  id?: StringFilter;
  organization?: OrganizationWhereUniqueInput;
  title?: StringNullableFilter;
};
