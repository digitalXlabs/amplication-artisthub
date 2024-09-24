import { Artist } from "../artist/Artist";
import { JsonValue } from "type-fest";
import { Submission } from "../submission/Submission";

export type Artwork = {
  artist?: Artist | null;
  createdAt: Date;
  description: string | null;
  file: JsonValue;
  id: string;
  submissions?: Array<Submission>;
  title: string | null;
  updatedAt: Date;
};
