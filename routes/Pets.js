const auth = require('../utils/auth');
const { contract} = require('../web3Config/web3Config');

const express = require('express');
const { getUserLogged, verifyToken } = require('../utils/auth');
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
                    // res.send('Erro ao recuperar informações na blockchain');
                }
            }
        } else {
            res.send('Erro ao recuperar informações da blockchain');
        }
    }
});

router.post('/petchain/api/pet', verifyToken("TUTOR"), async (req, res) => {
    try {
        req.user = getUserLogged(req.headers['token']);
        await contract.methods.addPet(req.body.atrPetName, req.body.atrRgaAnimal, req.body.atrBirthDate, req.body.atrPetBreed, req.body.atrMaleOrFemale, req.body.atrSpecie, req.body.atrColor).send({ from: req.user.address, gas: 1000000 });
        res.send('Animal Cadastrado com Sucesso!');
    } catch (err) {
        if (err.data) {
            const error = Object.keys(err.data)[0];
            if (error) {
                if (err.data[error].error === 'revert') {
                    res.send('Acesso negado');
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
        req.user = getUserLogged(req.headers['token']);
        const response = await contract.methods.getPetsByUserLogged().call({ from: req.user.address });
        res.send({data: response});
    }catch(err){
        res.send('Erro ao recuperar informações da blockchain');
    }
});

router.post('/petchain/api/pet/permission', verifyToken("TUTOR"), async (req, res) => {
    try{
        req.user = getUserLogged(req.headers['token']);
        await contract.methods.petPermissionAccess(req.body.atrIdPet, req.body.atrAddressVet, req.body.atrSendPermission).send({ from: req.user.address, gas: 1000000 });
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
