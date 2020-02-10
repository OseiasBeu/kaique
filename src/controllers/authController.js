const express = require('express');
const jwt = require('jsonwebtoken');

const autoConfig = require('../config/auth');
const User = require('../models/User');

const router = express.Router();


function generateToken(params= {}) { 
	return jwt.sign(params, autoConfig.secret, {
		expiresIn: 86400,
	});
}


//REGISTRO
router.post('/register', async (req, res) => {
	const {email} = req.body;

	try {
		if (await User.findOne({email}))
			return res.status(400).send({error: 'Usuário ' + email + ' já cadastrado'});

		const user = await User.create(req.body);

		user.password = undefined;

		return res.send({ 
			user,
			token: generateToken({id: user.id, email: user.email}),
		});	
	} catch (err) {
		return res.status(400).send({ error: 'Falha no registro'});
	}
});


//AUTENTICACAO
router.post('/authenticate', async (req, res) => {
	const {email, password} = req.body;

	const user = await User.findOne({email}).select('+password');

if (!user)
	return res.status(400).send({error: 'Usuário não existe'});

if (password !=	 user.password)
	return res.status(400).send({error: 'Senha inválida'});


res.send({
	user, 
	token: generateToken({id: user.id, email: user.email}),
});
});


module.exports = app => app.use('/auth', router);