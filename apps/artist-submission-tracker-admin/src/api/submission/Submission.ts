import { Artwork } from "../artwork/Artwork";
import { Organization } from "../organization/Organization";

export type Submission = {
  artwork?: Artwork | null;
  createdAt: Date;
  deadline: Date | null;
  fee: number | null;
  id: string;
  organization?: Organization | null;
  title: string | null;
  updatedAt: Date;
};
