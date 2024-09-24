import { Artwork } from "../artwork/Artwork";
import { JsonValue } from "type-fest";
import { Project } from "../project/Project";

export type Artist = {
  artistStatements: string | null;
  artworks?: Array<Artwork>;
  bioData: string | null;
  bioPdf: JsonValue;
  createdAt: Date;
  cvData: string | null;
  cvPdf: JsonValue;
  email: string | null;
  id: string;
  name: string | null;
  projects?: Array<Project>;
  updatedAt: Date;
};
