import { connection } from "./connection";
import { userType } from "../@types/types";

const createUserModel = async({username, classe, level, password}: userType) => {
  const [result] = await connection.execute(
    `INSERT INTO Trybesmith.users (username, classe, level, password)
    VALUES ('${username}', '${classe}', '${level}', '${password}')`
  );
  return result
}

const getUserModel = async(id: string) => {
  const [result] = await connection.execute(
    `SELECT * FROM Trybesmith.users WHERE id = ${id}`
  )
  return result
}

export { createUserModel, getUserModel }