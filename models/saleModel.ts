import { connection } from "./connection";
import { userType, saleType } from "../@types/types";

const createSaleModel = async({userId, itemId, quantity}: saleType) => {
  const [result] = await connection.execute(
    `INSERT INTO Trybesmith.sales (user_id, item_id, quantity)
    VALUES ('${userId}', '${itemId}', '${quantity}')`
  );
  return result
}

export { createSaleModel }