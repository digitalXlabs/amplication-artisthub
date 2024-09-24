import { ArtworkWhereUniqueInput } from "../artwork/ArtworkWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type SubmissionUpdateInput = {
  artwork?: ArtworkWhereUniqueInput | null;
  deadline?: Date | null;
  fee?: number | null;
  organization?: OrganizationWhereUniqueInput | null;
  title?: string | null;
};
