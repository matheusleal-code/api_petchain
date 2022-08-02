const { contract} = require('../web3Config/web3Config');

const express = require('express');
const router = express.Router();

router.get('/petchain/api/pet', async (req, res) => {
    try {
        const response = await contract.methods.getPetDataById(req.query.atrIdPet).call({ from: req.query.address });
        res.json({ data: response });
    } catch (err) {
        if (err.data) {
            const error = Object.keys(err.data)[0];
            if (error) {
                if (err.data[error].error === 'revert') {
                    res.send('Somente pessoas autorizadas.');
                } else {
                    res.send('Erro ao recuperar informações na blockchain');
                }
            }
        } else {
            res.send('Erro ao recuperar informações da blockchain');
        }
    }
});

router.post('/petchain/api/pet', async (req, res) => {
    try {
        await contract.methods.addPet(req.body.atrPetName).send({ from: req.query.address, gas: 1000000 });
        res.send('Animal Cadastrado com Sucesso!');
    } catch (err) {
        if (err.data) {
            const error = Object.keys(err.data)[0];
            if (error) {
                if (err.data[error].error === 'revert') {
                    res.send('Insira um endereço de tutor válido.');
                } else {
                    res.send('Erro ao publicar informações na blockchain');
                }
            }
        } else {
            res.send('Erro ao publicar informações da blockchain');
        }
    }
});

router.get('/petchain/api/pet/user', async (req, res) => {
    try{
        const response = await contract.methods.getPetsByUserLogged().call({ from: req.query.address });
        res.send({data: response});
    }catch(err){
        res.send('Erro ao recuperar informações da blockchain');
    }
});

router.post('/petchain/api/pet/permission', async (req, res) => {
    try{
        await contract.methods.petPermissionAccess(req.body.atrIdPet, req.body.atrAddressVet, req.body.atrSendPermission).send({ from: req.query.address, gas: 1000000 });
        if(req.body.atrSendPermission){
            res.send('Permissão de acesso aos dados do animal foi atribuída ao endereço '+ req.body.atrAddressVet);
        }else {
            res.send('Permissão de acesso aos dados do animal foi removida do endereço '+ req.body.atrAddressVet);
        }
    }catch(err){
        if (err.data) {
            const error = Object.keys(err.data)[0];
            if (error) {
                if (err.data[error].error === 'revert') {
                    res.send('Insira um endereço de veterinário válido.');
                } else {
                    res.send('Erro ao publicar informações na blockchain');
                }
            }
        } else {
            res.send('Erro ao publicar informações da blockchain');
        }
    }
});

module.exports = router;
