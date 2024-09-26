import { User } from "../user/User";

export type Journal = {
  brewMethod?:
    | "Espresso"
    | "FrenchPress"
    | "PourOver"
    | "AeroPress"
    | "Drip"
    | null;
  brewTime: number | null;
  coffeeName: string | null;
  content: string | null;
  createdAt: Date;
  createdBy: string | null;
  grindSize?: "Fine" | "Espresso" | "FilterDrip" | "Coarse" | null;
  id: string;
  notes: string | null;
  rating: number | null;
  roastDate: Date | null;
  roaster: string | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
  waterTemperature: number | null;
};
