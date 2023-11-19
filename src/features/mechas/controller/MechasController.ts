import { type Request, type Response } from "express";
import { type MechasRepository } from "../repository/types";

class MechasController {
  constructor(private readonly mechasRepository: MechasRepository) {}

  getMechas = (_req: Request, res: Response) => {
    (async () => {
      const mechas = await this.mechasRepository.getMechas();
      res.status(200).json({ mechas });
    })();
  };
}

export default MechasController;
