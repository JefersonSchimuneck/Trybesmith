import { connection } from "./connection";

const getItemsModel = async() => {
  const [result] = await connection.execute(
    'SELECT * FROM Trybesmith.items'
  )
  return result
}

export { getItemsModel }