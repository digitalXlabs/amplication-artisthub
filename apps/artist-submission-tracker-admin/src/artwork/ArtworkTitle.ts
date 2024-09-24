import { Artwork as TArtwork } from "../api/artwork/Artwork";

export const ARTWORK_TITLE_FIELD = "title";

export const ArtworkTitle = (record: TArtwork): string => {
  return record.title?.toString() || String(record.id);
};
