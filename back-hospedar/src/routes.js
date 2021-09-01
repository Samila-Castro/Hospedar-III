const express = require('express');
const router = express.Router();
const users = require('./services/users');
const imoveis = require('./services/imoveis');
const auth = require("./services/auth");
const jwt = require("./services/jwt");
const { request, response } = require('express');

// users
router.post('/session', async function(req, res, next) {
  const { email, password } = req.body;
  try {
    var user = await users.getOne(email, 'email');

    if (!user.length) {
      return res.status(400).json({ error: "User not found" });
    }
    if (password !== user[0].password) {
      return res.status(400).json({ error: "Invalid password" });
    }

    var payload = { id: user[0].id };
    var token = jwt.generateToken(payload);

    res.json({ user: user[0], token });
  } catch (error) {
    next(error);
  }
});

router.get('/users', async function(req, res, next) {
  try {
    res.json(await users.getAll());
  } catch (err) {
    console.error(`Erro ao buscar usuários`, err.message);
    next(err);
  }
});

router.post('/users', async function(req, res, next) {
  try {
   const {name, email, password, type } = req.body;
    res.json(await users.create({  name, email, password, type }));
    
  } catch (err) {
    console.error(`Erro ao criar usuário`, err.message);
    next(err);
  }
});


// Imoveis
router.get('/imoveis',  auth.authenticate(), async function(req, res, next) {
  const { name, qtde} = req.body;
  console.log( { name, qtde});
  try {
    if(!['CLIENT','BUSINESS'].includes(req.user.type)) return res.status(401).json({ error: "Você não tem permissão" });
    res.json(await imoveis.getAll(qtde, name));
  } catch (err) {
    console.error(`Erro ao buscar imóveis`, err.message);
    next(err);
  }
});

router.get('/imoveis/:id', auth.authenticate(), async function(req, res, next) {
  const { id } = req.params;
  if(!['CLIENT','BUSINESS'].includes(req.user.type)) return res.status(401).json({ error: "Você não tem permissão" });
  try {
    const result = await imoveis.getById(id);
    res.json(result.imovel[0]);

  } catch (err) {
    console.error(`Erro ao buscar imóvel`, err.message);
    next(err);
  }
});

router.post('/imoveis', auth.authenticate(), async function(req, res, next) {
  if(!['BUSINESS'].includes(req.user.type)) return res.status(401).json({ error: "Você não tem permissão" });
  try {
   const {name, country, city } = req.body;
    res.json(await imoveis.create({ name, country, city}));
    
  } catch (err) {
    console.error(`Erro ao criar imóvel`, err.message);
    next(err);
  }
});

router.put('imoveis/:id', auth.authenticate(), async function(req, res, next) {
  const { id } = req.params;

  const { name, country, city } = req.body;

  try {
    const imovelUpdate = { name, country, city }

    const result = await imovel.update(id , imovelUpdate);

    res.json(result);

  }catch(err){
    console.error(`Erro ao buscar imóvel`, err.message);
    next(err);
  }
});

router.delete('imoveis/:id', auth.authenticate(), async function(req, res, next){
  const { id } = request.params;

  try{
    const result = await imovel.delet(id);
  }catch(err){
      console.error(`Erro ao deletar imóvel`, err.message);
      next(err);
  }

});

module.exports = router;