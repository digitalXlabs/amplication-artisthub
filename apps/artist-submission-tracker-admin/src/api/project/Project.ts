import { Artist } from "../artist/Artist";

export type Project = {
  artist?: Artist | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
