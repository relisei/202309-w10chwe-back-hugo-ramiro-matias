import { type Request } from "express";

export interface MechaStructure {
  _id: string;
  name: string;
  image: string;
  characteristics: {
    speed: number;
    strength: number;
  };
}
