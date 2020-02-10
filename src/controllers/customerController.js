const express = require('express');
const authMiddleware = require('../middlewares/auth');
const Customer = require('../models/Customer');
//const Favorite = require('../models/Product');

const router = express.Router();

router.use(authMiddleware);


//	LISTAR TODOS OS CLIENTES
router.get('/', async (req, res) =>{
	//res.send({user: req.userId, email: req.email});
	try {
		const customers = await Customer.find();//.populate('user');
		return res.send({customers});

	} catch (err) {
		return res.status(400).send({error: 'Erro na consulta de listagem dos clientes'});
	}
});


//	CONSULTA POR ID
router.get('/:customerId', async(req, res) =>{
	//res.send({user: req.userId});
	try {
		const customer = await Customer.findById(req.params.customerId);//.populate('user');
		return res.send({customer});

	} catch (err) {
		return res.status(400).send({error: 'Erro no carregamento do projeto'});
	}
});


//	CRIA NOVO CLIENTE
router.post('/', async(req, res) =>{
	//res.send({user: req.userId});
	try {
		const customer = await Customer.create({...req.body});//, user: req.userId});
		return res.send({customer});

	} catch (err) {
		return res.status(400).send({error: 'Erro na criação do cliente'});
	}
});


//	ATUALIZA
router.put('/:customerId', async(req, res) =>{
	res.send({user: req.userId});
});


//	DELETA
router.delete('/:customerId', async(req, res) =>{
	try {
		await Customer.findByIdAndRemove(req.params.customerId);
		return res.send();

	} catch (err) {
		//console.log(err);
		return res.status(400).send({error: 'Erro na remoção do cliente'});
	}
});

router.get('/teste', async(req, res) =>{
	try {
		console.log("FUNCIONAAAA!!!!!")
		// await Customer.findByIdAndRemove(req.params.customerId);
		// return res.send();

	} catch (err) {
		//console.log(err);
		return res.status(400).send({error: 'Erro na remoção do cliente'});
	}
});

module.exports = app => app.use('/customers', router);

