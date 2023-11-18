import { type MechaApiStructure, type MechaStructure } from "../types";

export const mechaApiToMecha = ({
  _id: id,
  characteristics,
  ...mechaBasic
}: MechaApiStructure): MechaStructure => ({
  id,
  ...mechaBasic,
  characteristics: { ...characteristics },
});
