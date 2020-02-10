const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

/*app.get('/', (req,res) => {
	res.send('Teste magalu')
});*/

require('./controllers/authController')(app);
require('./controllers/customerController')(app);
require('./controllers/favoriteController')(app);

// app.listen(3000);

app.listen(3000, () => {
	console.log(`=================================================`)
	console.log(`Servidor funcionando na porta ${3000}!`)
	console.log(`PRESSIONE 'CTRL + C' PARA SAIR`)
	console.log(`=================================================`)
})

