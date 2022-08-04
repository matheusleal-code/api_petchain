const auth = require('../utils/auth');
const { contract} = require('../web3Config/web3Config');

const express = require('express');
const router = express.Router();

router.get('/petchain/api/vaccination', async (req, res) => {
    try{
        const response = await contract.methods.getVaccinationDataById(req.query.atrIdVaccination).call({ from: req.query.address });
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

router.post('/petchain/api/vaccination', async (req, res) => {
    try{
        const response = await contract.methods.addVaccination(req.body.atrProviderVaccine, req.body.atrPetOwner,req.body.atrIdVaccine, req.body.atrIdPet, req.body.atrVaccinationDate).send({ from: req.query.address, gas: 1000000 });
        res.send('Vacinação Cadastrada com Sucesso!');
    }catch(err){
        res.send('Erro ao publicar informações da blockchain');
    }
});

router.get('/petchain/api/pet/vaccine', async (req, res) => {
    try{
        const response = await contract.methods.getPetVaccinationListById(req.query.atrIdPet).call({ from: req.query.address });
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