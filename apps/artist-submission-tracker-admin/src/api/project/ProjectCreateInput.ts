import { ArtistWhereUniqueInput } from "../artist/ArtistWhereUniqueInput";

export type ProjectCreateInput = {
  artist?: ArtistWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
};
