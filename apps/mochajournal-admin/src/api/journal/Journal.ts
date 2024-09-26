import { User } from "../user/User";

export type Journal = {
  brewMethod?: "Option1" | null;
  brewTime: number | null;
  coffeeName: string | null;
  content: string | null;
  createdAt: Date;
  grindSize?: "Option1" | null;
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
