import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JournalListRelationFilter } from "../journal/JournalListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  journals?: JournalListRelationFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
