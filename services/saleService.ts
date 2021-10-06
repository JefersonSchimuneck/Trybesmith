import { saleType } from '../@types/types';
import { saleSchema } from '../@types/saleSchema';
import { createSaleModel } from "../models/saleModel";

const createSaleService = async (sale: saleType) => {
  saleSchema.parse(sale)
  await createSaleModel(sale);
  return sale
}

export { createSaleService }