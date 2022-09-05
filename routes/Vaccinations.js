const auth = require('../utils/auth');
const { contract} = require('../web3Config/web3Config');

const express = require('express');
const { verifyToken, getUserLogged } = require('../utils/auth');
const router = express.Router();

router.get('/petchain/api/vaccination', async (req, res) => {
    try{
        req.user = getUserLogged(req.headers['token']);
        const response = await contract.methods.getVaccinationDataById(req.query.atrIdVaccination).call({ from: req.user.address });
        res.json({ data: response });
    }catch(err){
        if (err.data) {
            const error = Object.keys(err.data)[0];
            if (error) {
                if (err.data[error].error === 'revert') {
                    res.send('Somente pessoas autorizadas.');
                } else {
                    res.send('Erro ao recuperar informações da blockchain');
                }
            }
        } else {
            res.send('Erro ao recuperar informações da blockchain');
        }
    }
});

router.post('/petchain/api/vaccination', verifyToken("VET"), async (req, res) => {
    try{
        req.user = getUserLogged(req.headers['token']);
        const response = await contract.methods.addVaccination(req.body.atrProviderVaccine, req.body.atrPetOwner,req.body.atrIdVaccine, req.body.atrIdPet, req.body.atrVaccinationDate).send({ from: req.user.address, gas: 1000000 });
        res.send('Vacinação Cadastrada com Sucesso!');
    }catch(err){
        res.send('Erro ao publicar informações da blockchain');
    }
});

router.get('/petchain/api/pet/vaccine', async (req, res) => {
    try{
        req.user = getUserLogged(req.headers['token']);
        const response = await contract.methods.getPetVaccinationListById(req.query.atrIdPet).call({ from: req.user.address });
        res.json({ data: response });
    }catch(err){
        if (err.data) {
            const error = Object.keys(err.data)[0];
            if (error) {
                if (err.data[error].error === 'revert') {
                    res.send('Somente pessoas autorizadas.');
                } else {
                    res.send('Erro ao recuperar informações da blockchain');
                }
            }
        } else {
            res.send('Erro ao recuperar informações da blockchain');
        }
    }
});

module.exports = router;