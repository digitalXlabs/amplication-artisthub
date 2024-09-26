import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JournalUpdateInput = {
  brewMethod?:
    | "Espresso"
    | "FrenchPress"
    | "PourOver"
    | "AeroPress"
    | "Drip"
    | null;
  brewTime?: number | null;
  coffeeName?: string | null;
  content?: string | null;
  createdBy?: string | null;
  grindSize?: "Fine" | "Espresso" | "FilterDrip" | "Coarse" | null;
  notes?: string | null;
  rating?: number | null;
  roastDate?: Date | null;
  roaster?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
  waterTemperature?: number | null;
};
