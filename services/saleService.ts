import { saleType } from '../@types/types';
import { saleSchema } from '../@types/saleSchema';
import { createSaleModel, getSalesModel, getSaleByUserIdModel } from "../models/saleModel";

const createSaleService = async(sale: saleType) => {
  saleSchema.parse(sale)
  await createSaleModel(sale);
  return sale;
}

const getSalesService = async() => {
  const sales = await getSalesModel();
  return sales;
}

const getSaleByUserIdService = async(id: string) => {
  const sale = await getSaleByUserIdModel(id);
  const saleResult = JSON.parse(JSON.stringify(sale))
  if (!saleResult[0]) {
    throw new Error('Not found')
  }
  return sale;
}

export { createSaleService, getSalesService, getSaleByUserIdService }