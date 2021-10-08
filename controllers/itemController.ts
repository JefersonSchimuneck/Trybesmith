import { Request, Response } from "express";
import { getItemsService } from "../services/itemService"

const getItemsController = async(request: Request, response: Response) => {
  const items = await getItemsService()
  return response.status(200).json({items})
}

export { getItemsController }