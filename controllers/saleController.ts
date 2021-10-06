import { Request, Response } from "express";
import { createSaleService } from "../services/saleService";

const createSaleController = async (request: Request, response: Response) => {
  const sale =  await createSaleService(request.body)
  return response.status(201).json({ sale });
};

export { createSaleController };
