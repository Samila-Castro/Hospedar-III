const db = require('./db');
const helper = require('../helper');
const {v4 : uuidv4} = require('uuid');


async function getAll() {
  const rows = await db.query(
    'SELECT * FROM imoveis'
  );
  const imoveis = helper.emptyOrRows(rows);

  return {
    imoveis
  }
}

async function getById(id) {
  const rows = await db.query(
    'SELECT * FROM imoveis WHERE id = $1',
    [id]
  );
  const imovel = helper.emptyOrRows(rows);

  return {
    imovel
  }
}

async function create(imovel) {
  const result = await db.query(
    'INSERT INTO imoveis(name, country, city, id) VALUES ($1, $2, $3, $4) RETURNING *',
    [imovel.name, imovel.country, imovel.city, uuidv4() ]
  );
  let message = 'Erro ao criar imóvel';

  if (result.length) {
    return {...result};
  }
  return {message}

}

async function delet(id, imovel) {

  const rows = await db.query(
      'DELETE FROM imoveis  WHERE id = $1',
      [id]
  );
  return helper.emptyOrRows(rows);

  
}

async function update(id, imovel){
  const rows = await db.query(
    'UPDATE imoveis SET name = $1, country = $2, city = $3 WHERE id = $5',
    [ imovel.name, imovel.country, imovel.city, id]
  );
  return helper.emptyOrRows(rows);

}

module.exports = {
  getAll,
  create,
  getById,
  delet,
  update
}