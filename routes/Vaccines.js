const auth = require('../utils/auth');
const { contract} = require('../web3Config/web3Config');

const express = require('express');
const router = express.Router();

router.get('/petchain/api/vaccine', async (req, res) => {
    try{
        const response = await contract.methods.getVaccineDataById(req.query.atrIdVaccine).call({ from: req.query.address });
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

router.post('/petchain/api/vaccine', async (req, res) => {
    try{
        await contract.methods.addVaccine(req.body.atrBrand, req.body.atrName, req.body.atrManufacturingDate, req.body.atrExpirationDate).send({ from: req.query.address, gas: 1000000 });
        res.send('Vacina Cadastrada com Sucesso!');
    }catch(err){
        console.log(err);
        res.send('Erro ao publicar informações da blockchain');
    }
});

router.post('/petchain/api/vaccine/permission', async (req, res) => {
    try{
        await contract.methods.vaccinePermissionAccess(req.body.atrIdVaccine, req.body.atrAddressVet).send({ from: req.query.address, gas: 1000000 });
        res.send('Permissão de acesso aos dados da vacina foi atribuída ao endereço '+ req.body.atrAddressVet);
    }catch(err){
        res.send('Erro ao publicar informações na blockchain');
    }
});

router.get('/petchain/api/vaccine/list', async (req, res) => {
    try{
        const response = await contract.methods.getVaccinesByUserLogged().call({ from: req.query.address });
        res.json({ data: response });
    }catch(err){
        res.send('Erro ao recuperar informações da blockchain');
    }
})

module.exports = router;
