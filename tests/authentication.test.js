const { connection } = require('../dist/models/connection')
const { callDredd } = require('./dredd')

describe('Group Autenticação', () => {
  beforeAll(async () => {
    // await connection.execute(`
    //   DROP DATABASE IF EXISTS Trybesmith;

    //   CREATE DATABASE Trybesmith;

    //   USE Trybesmith;

    //   CREATE TABLE users (
    //       id INT NOT NULL auto_increment,
    //       name VARCHAR(30) NOT NULL,
    //       class VARCHAR(15) NOT NULL,
    //       level INT NOT NULL,
    //       password VARCHAR(10) NOT NULL,
    //       PRIMARY KEY(id)
    //   ) ENGINE=INNODB;

    //   INSERT INTO users
    //   VALUES (1, 'Legolas', 'Ranger', 10, '1234');
    // `)
  })

  describe('1 - Crie um endpoint para realizar o login', () => {
    it('Atende à especificação da API', async () => {
      await callDredd('Autenticação > Login > Fazer login')
    })

    it('Cria um usuário no banco', async () => {
      const user = await connection.execute(`
        SELECT * FROM users
        WHERE name = 'Legolas'
      `)

      expect(user[0][0]).toBe(1)
    })
  })
})