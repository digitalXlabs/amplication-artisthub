import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JournalCreateInput = {
  brewMethod?: "Option1" | null;
  brewTime?: number | null;
  coffeeName?: string | null;
  content?: string | null;
  grindSize?: "Option1" | null;
  notes?: string | null;
  rating?: number | null;
  roastDate?: Date | null;
  roaster?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
  waterTemperature?: number | null;
};
