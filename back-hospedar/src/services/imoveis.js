const db = require('./db');
const helper = require('../helper');

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
    'INSERT INTO imoveis(name, country, city) VALUES ($1, $2, $3) RETURNING *',
    [imovel.name, imovel.country, imovel.city]
  );
  let message = 'Erro ao criar imóvel';

  if (result.length) {
    return {...result};
  }
  return {message}

}

module.exports = {
  getAll,
  create,
  getById
}