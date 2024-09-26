import { JournalWhereInput } from "./JournalWhereInput";
import { JournalOrderByInput } from "./JournalOrderByInput";

export type JournalFindManyArgs = {
  where?: JournalWhereInput;
  orderBy?: Array<JournalOrderByInput>;
  skip?: number;
  take?: number;
};
