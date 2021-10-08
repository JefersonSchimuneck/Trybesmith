import { getItemsModel } from "../models/itemModel";

const getItemsService = async() => {
  const items = await getItemsModel();
  return items;
}

export { getItemsService }
