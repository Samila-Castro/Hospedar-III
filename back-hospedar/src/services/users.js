const db = require('./db');
const helper = require('../helper');

const {v4 : uuidv4} = require('uuid');

async function getAll() {
  const rows = await db.query(
    'SELECT * FROM users'
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function create(user) {
  const result = await db.query(
    'INSERT INTO users(name, email, password, type, id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [user.name, user.email, user.password, user.type,  uuidv4()]
  );
  let message = 'Erro ao criar usuário';

  if (result.length) {
    return {...result};
  }
  return {message}

}

async function getOne(value, field = 'id') {
  const rows = await db.query(
    `SELECT * FROM users WHERE ${field} = $1`,
    [value]
  );
  const user = helper.emptyOrRows(rows);

  return user
}

module.exports = {
  getAll,
  create,
  getOne
}