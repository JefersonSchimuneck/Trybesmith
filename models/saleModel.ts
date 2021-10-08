import { connection } from "./connection";
import { saleType } from "../@types/types";

const createSaleModel = async({userId, itemId, quantity}: saleType) => {
  const [sale] = await connection.execute(
    `INSERT INTO Trybesmith.sales (user_id, item_id, quantity)
    VALUES ('${userId}', '${itemId}', '${quantity}')`
  );
  return sale;
}

const getSalesModel = async() => {
  const [sale] = await connection.execute(
    'SELECT * FROM Trybesmith.sales'
  )
  return sale;
}

const getSaleByUserIdModel = async(id: string) => {
  const [sale] = await connection.execute(
    `SELECT * FROM Trybesmith.sales WHERE user_id = ${id}`
  );
  return sale;
}

export {
  createSaleModel,
  getSalesModel,
  getSaleByUserIdModel
}
