import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ArtworkListRelationFilter } from "../artwork/ArtworkListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";

export type ArtistWhereInput = {
  artistStatements?: StringNullableFilter;
  artworks?: ArtworkListRelationFilter;
  bioData?: StringNullableFilter;
  bioPdf?: JsonFilter;
  cvData?: StringNullableFilter;
  cvPdf?: JsonFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  projects?: ProjectListRelationFilter;
};
