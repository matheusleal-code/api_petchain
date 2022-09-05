const auth = require('../utils/auth');
const { contract} = require('../web3Config/web3Config');

const express = require('express');
const verifyToken = require('../utils/auth');
const { getUserLogged } = require('../utils/auth');
const router = express.Router();

router.post('/petchain/api/user', async (req, res) => {
    try{
        req.user = getUserLogged(req.headers['token']);
        const response = await contract.methods.addUser(req.body.atrUserName, req.body.atrUserType, req.body.atrUserAddress).send({ from: req.user.address, gas: 1000000 });
        res.send('Novo usuário cadastrado com sucesso!');
    }catch(err){
        res.send('Erro ao publicar informações na blockchain');
    }
})

router.get('/petchain/api/user', async (req, res) => {
    try{
        req.user = getUserLogged(req.headers['token']);
        const response = await contract.methods.getUserDataByAddress(req.body.address).call({ from: req.user.address })
        res.send(response);
    }catch(err){
        console.log(err)
        res.send('Erro ao recuperar informações da blockchain');
    }
})

module.exports = router;
