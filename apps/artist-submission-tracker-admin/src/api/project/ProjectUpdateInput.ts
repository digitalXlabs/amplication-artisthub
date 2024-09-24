import { ArtistWhereUniqueInput } from "../artist/ArtistWhereUniqueInput";

export type ProjectUpdateInput = {
  artist?: ArtistWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
};
