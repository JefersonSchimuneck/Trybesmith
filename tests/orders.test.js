const { request } = require('express')
const { callDredd } = require('./dredd')

describe('Group Orders', () => {
  describe('Consultar ordem', () => {
    let orderId = null;
    let token = null;

    beforeAll(async () => {
      orderId = await connection
        .execute(`INSERT INTO order`)
        .then((result) => result[0].insertId);
      
      await request('http://localhost:3000/login', { username: 'Legolas', password: '123456' })
        .then(response => response.json())
        .then(data => token = data.token);
    });

    it('Atende à especificação da API', async () => {
      await callDredd('Orders > Registro Order > Consultar order > Example 1', `--itemId=${orderId} --authToken="${token}"`)
      await callDredd('Orders > Registro Order > Consultar order > Example 2', '--itemId=0')
      await callDredd('Orders > Registro Order > Consultar order > Example 3')
    })
  });
});
