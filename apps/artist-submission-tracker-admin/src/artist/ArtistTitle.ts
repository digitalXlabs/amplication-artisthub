import { Artist as TArtist } from "../api/artist/Artist";

export const ARTIST_TITLE_FIELD = "name";

export const ArtistTitle = (record: TArtist): string => {
  return record.name?.toString() || String(record.id);
};
