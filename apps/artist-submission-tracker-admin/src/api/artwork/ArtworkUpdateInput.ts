import { ArtistWhereUniqueInput } from "../artist/ArtistWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { SubmissionUpdateManyWithoutArtworksInput } from "./SubmissionUpdateManyWithoutArtworksInput";

export type ArtworkUpdateInput = {
  artist?: ArtistWhereUniqueInput | null;
  description?: string | null;
  file?: InputJsonValue;
  submissions?: SubmissionUpdateManyWithoutArtworksInput;
  title?: string | null;
};
