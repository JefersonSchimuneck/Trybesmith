import { connection } from './connection';
import { userType } from '../@types/types';

const createUserModel = async ({ name, classe, level, password }: userType) => {
  const [results] = await connection.execute(
    `INSERT INTO Trybesmith.users (name, class, level, password)
    VALUES ('${name}', '${classe}', '${level}', '${password}')`,
  );
  const id = JSON.parse(JSON.stringify(results)).insertId;
  return { id, name };
};

const getUserModel = async (id: string) => {
  const [result] = await connection.execute(
    `SELECT * FROM Trybesmith.users WHERE id = ${id}`,
  );
  return result;
};

export { createUserModel, getUserModel };