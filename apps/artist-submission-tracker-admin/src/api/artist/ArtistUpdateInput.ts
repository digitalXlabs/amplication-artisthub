import { ArtworkUpdateManyWithoutArtistsInput } from "./ArtworkUpdateManyWithoutArtistsInput";
import { InputJsonValue } from "../../types";
import { ProjectUpdateManyWithoutArtistsInput } from "./ProjectUpdateManyWithoutArtistsInput";

export type ArtistUpdateInput = {
  artistStatements?: string | null;
  artworks?: ArtworkUpdateManyWithoutArtistsInput;
  bioData?: string | null;
  bioPdf?: InputJsonValue;
  cvData?: string | null;
  cvPdf?: InputJsonValue;
  email?: string | null;
  name?: string | null;
  projects?: ProjectUpdateManyWithoutArtistsInput;
};
