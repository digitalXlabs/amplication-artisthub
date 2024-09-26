import { Journal as TJournal } from "../api/journal/Journal";

export const JOURNAL_TITLE_FIELD = "coffeeName";

export const JournalTitle = (record: TJournal): string => {
  return record.coffeeName?.toString() || String(record.id);
};
