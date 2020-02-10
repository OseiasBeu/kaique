const express = require('express');
const authMiddleware = require('../middlewares/auth');
const axios = require('axios');
const Customer = require('../models/Customer');
const Favorite = require('../models/Product');


const router = express.Router();

router.use(authMiddleware);


router.post('/:customerId/:idLuiza', async(req, res) =>{
  // router.get('/:customerId', async(req, res) =>{


  // ----------------------------------------------------------------------------------------------
  // axios.get('http://challenge-api.luizalabs.com/api/product/'+ req.params.idLuiza).then(resp => {
    axios.get('https://viacep.com.br/ws/05875350/json').then(resp => {
    cep = resp.data.cep;
    console.log(cep)
    // console.log(req.params.customerId);
// ----------------------------------------------------------------------------------------------


let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  let dbo = db.db("teste");
  let myquery = { _id: req.params.customerId };
  let myQ = {"nome":"kaique"}
  console.log(myQ)
  let favorite = { $set: {favorite:{"primeiro":'numero 1',"Segundo":'numero 2'}} };
  dbo.collection("customers").updateOne(myQ, favorite, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
    
  });
});
  });
});

module.exports = app => app.use('/favorites', router);