import { Request, Response } from "express";
import { createSaleService, getSalesService, getSaleByUserIdService } from "../services/saleService";

const createSaleController = async (request: Request, response: Response) => {
  const { userId } = request;
  const sale =  await createSaleService({userId, ...request.body});
  return response.status(201).json({ sale });
};

const getSalesController = async (_request: Request, response: Response) => {
  const sales =  await getSalesService();
  return response.status(200).json({ sales });
};

const getSaleByUserIdController = async (request: Request, response: Response) => {
  const { id } = request.params;
  const sale =  await getSaleByUserIdService(id);
  return response.status(200).json({ sale });
};

export { createSaleController, getSalesController, getSaleByUserIdController };
