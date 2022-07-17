const express = require('express');
const app = express();
const cors = require('cors');

const Web3 = require('web3');
const contractConfig = require('./config');

app.use(cors());
app.use(express.json());

const web3 = new Web3("http://localhost:8545");
const contract = new web3.eth.Contract(contractConfig.CONTRACT_ABI, contractConfig.CONTRACT_ADDRESS);

let accounts;

function getAccounts() {
    web3.eth.getAccounts().then(acc => {
        accounts = acc;
        console.log('acc', acc);
        web3.eth.getBalance(acc[0]).then(balance => {
            console.log('balance', balance);
        })
    });
}

getAccounts();

// Pets
app.get('/petchain/api/pet', async (req, res) => {
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

app.post('/petchain/api/pet', async (req, res) => {
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

app.get('/petchain/api/pet/user', async (req, res) => {
    try{
        const response = await contract.methods.getPetsByUserLogged().call({ from: req.query.address });
        res.send({data: response});
    }catch(err){
        res.send('Erro ao recuperar informações da blockchain');
    }
});

app.post('/petchain/api/pet/permission', async (req, res) => {
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

// Vacinas
app.get('/petchain/api/vaccine', async (req, res) => {
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

app.post('/petchain/api/vaccine', async (req, res) => {
    try{
        await contract.methods.addVaccine(req.body.atrBrand).send({ from: req.query.address, gas: 1000000 });
        res.send('Vacina Cadastrada com Sucesso!');
    }catch(err){
        res.send('Erro ao publicar informações da blockchain');
    }
});

app.post('/petchain/api/vaccine/permission', async (req, res) => {
    try{
        await contract.methods.vaccinePermissionAccess(req.body.atrIdVaccine, req.body.atrAddressVet).send({ from: req.query.address, gas: 1000000 });
        res.send('Permissão de acesso aos dados da vacina foi atribuída ao endereço '+ req.body.atrAddressVet);
    }catch(err){
        res.send('Erro ao publicar informações na blockchain');
    }
});

app.get('/petchain/api/vaccine/list', async (req, res) => {
    try{
        const response = await contract.methods.getVaccinesByUserLogged().call({ from: req.query.address });
        res.json({ data: response });
    }catch(err){
        res.send('Erro ao recuperar informações da blockchain');
    }
})

// Usuários
app.post('/petchain/api/user', async (req, res) => {
    try{
        const response = await contract.methods.addUser(req.body.atrUserName, req.body.atrUserType, req.body.atrUserAddress).send({ from: req.query.address, gas: 1000000 });
        res.send('Novo usuário cadastrado com sucesso!');
    }catch(err){
        res.send('Erro ao publicar informações na blockchain');
    }
})

app.get('/petchain/api/user', async (req, res) => {
    try{
        const response = await contract.methods.getUserDataByAddress(req.body.address).call({ from: req.query.address })
    res.send(response);
    }catch(err){
        res.send('Erro ao recuperar informações da blockchain');
    }
})

// Vacinação
app.get('/petchain/api/vaccination', async (req, res) => {
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

app.post('/petchain/api/vaccination', async (req, res) => {
    try{
        const response = await contract.methods.addVaccination(req.body.atrProviderVaccine, req.body.atrPetOwner,req.body.atrIdVaccine, req.body.atrIdPet).send({ from: req.query.address, gas: 1000000 });
        res.send('Vacinação Cadastrada com Sucesso!');
    }catch(err){
        res.send('Erro ao publicar informações da blockchain');
    }
});

app.get('/petchain/api/pet/vaccine', async (req, res) => {
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

app.listen(3000, () => {
    console.log('listening on port ' + 3000);
});
