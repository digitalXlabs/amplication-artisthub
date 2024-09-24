import { ArtworkCreateNestedManyWithoutArtistsInput } from "./ArtworkCreateNestedManyWithoutArtistsInput";
import { InputJsonValue } from "../../types";
import { ProjectCreateNestedManyWithoutArtistsInput } from "./ProjectCreateNestedManyWithoutArtistsInput";

export type ArtistCreateInput = {
  artistStatements?: string | null;
  artworks?: ArtworkCreateNestedManyWithoutArtistsInput;
  bioData?: string | null;
  bioPdf?: InputJsonValue;
  cvData?: string | null;
  cvPdf?: InputJsonValue;
  email?: string | null;
  name?: string | null;
  projects?: ProjectCreateNestedManyWithoutArtistsInput;
};
