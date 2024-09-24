import { Submission as TSubmission } from "../api/submission/Submission";

export const SUBMISSION_TITLE_FIELD = "title";

export const SubmissionTitle = (record: TSubmission): string => {
  return record.title?.toString() || String(record.id);
};
