import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JournalWhereInput = {
  brewMethod?: "Espresso" | "FrenchPress" | "PourOver" | "AeroPress" | "Drip";
  brewTime?: FloatNullableFilter;
  coffeeName?: StringNullableFilter;
  content?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  grindSize?: "Fine" | "Espresso" | "FilterDrip" | "Coarse";
  id?: StringFilter;
  notes?: StringNullableFilter;
  rating?: IntNullableFilter;
  roastDate?: DateTimeNullableFilter;
  roaster?: StringNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  waterTemperature?: FloatNullableFilter;
};
