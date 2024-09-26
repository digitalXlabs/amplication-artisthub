import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JournalWhereInput = {
  brewMethod?: "Option1";
  brewTime?: FloatNullableFilter;
  coffeeName?: StringNullableFilter;
  content?: StringNullableFilter;
  grindSize?: "Option1";
  id?: StringFilter;
  notes?: StringNullableFilter;
  rating?: IntNullableFilter;
  roastDate?: DateTimeNullableFilter;
  roaster?: StringNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  waterTemperature?: FloatNullableFilter;
};
