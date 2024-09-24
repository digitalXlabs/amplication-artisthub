import { ArtistWhereUniqueInput } from "../artist/ArtistWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubmissionListRelationFilter } from "../submission/SubmissionListRelationFilter";

export type ArtworkWhereInput = {
  artist?: ArtistWhereUniqueInput;
  description?: StringNullableFilter;
  file?: JsonFilter;
  id?: StringFilter;
  submissions?: SubmissionListRelationFilter;
  title?: StringNullableFilter;
};
