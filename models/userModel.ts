import { connection } from "./connection";
import { userType } from "../@types/types";

const createUserModel = async({username, classe, level, password}: userType) => {
  const [user] = await connection.execute(
    `INSERT INTO Trybesmith.users (username, classe, level, password)
    VALUES ('${username}', '${classe}', '${level}', '${password}')`
  );
  return user;
}

const getUsersModel = async () => {
  const [users] = await connection.execute(
    'SELECT * FROM Trybesmith.users'
  );
  return users;
}

const getUserByIdModel = async(id: string) => {
  const [user] = await connection.execute(
    `SELECT * FROM Trybesmith.users WHERE id = ${id}`
  )
  return user;
}

const updateUserModel = async(id: string, user: userType) => {
  const {username, classe, level, password} = user
  await connection.execute(
    `UPDATE Trybesmith.users
    SET username = '${username}', classe = '${classe}', level = '${level}', password = '${password}'
    WHERE id = ${id}`
  );
  return {id, username, classe, level, password};
}

const deleteUserModel = async(id: string) => {
  await connection.execute(
    `DELETE FROM Trybesmith.users
    WHERE id = ${id}`
  )
  return;
}

export { createUserModel, getUserByIdModel, getUsersModel, updateUserModel, deleteUserModel }