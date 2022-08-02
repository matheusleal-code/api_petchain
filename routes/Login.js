const { contract} = require('../web3Config/web3Config');

const express = require('express');
const router = express.Router();

router.post('/petchain/api/login', async(req, res) => {
    try{
        const response = await web3.eth.personal.unlockAccount(req.body.address, req.body.password);
        console.log(response)
        const token = jwt.sign({
            user_address: req.body.address
        }, process.env.TOKEN_KEY, {
            expiresIn: "2h"
        });

        res.header('x-access-token', token);
        res.status(200);
        res.send('Usuário Autenticado com Sucesso!')
    }catch(err){
        res.status(500);
        res.send('Erro ao Realizar Login!');
    }
});

router.delete('/petchain/api/loggout', (req, res) => {
    web3.eth.personal.lockAccount(req.body.address, req.body.password);
    res.status(500);
});

module.exports = router;