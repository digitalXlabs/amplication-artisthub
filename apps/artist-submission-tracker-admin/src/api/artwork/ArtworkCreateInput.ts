import { ArtistWhereUniqueInput } from "../artist/ArtistWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { SubmissionCreateNestedManyWithoutArtworksInput } from "./SubmissionCreateNestedManyWithoutArtworksInput";

export type ArtworkCreateInput = {
  artist?: ArtistWhereUniqueInput | null;
  description?: string | null;
  file?: InputJsonValue;
  submissions?: SubmissionCreateNestedManyWithoutArtworksInput;
  title?: string | null;
};
