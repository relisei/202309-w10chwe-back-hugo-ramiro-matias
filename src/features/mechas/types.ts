import { type Request } from "express";
interface MechaBaseStructure {
  name: string;
  image: string;
  characteristics: {
    speed: number;
    strength: number;
  };
}

export interface MechaApiStructure extends MechaBaseStructure {
  _id: string;
}

export interface MechaStructure extends MechaBaseStructure {
  id: string;
}
