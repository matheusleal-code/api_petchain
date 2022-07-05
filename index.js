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

function getAccounts(){
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
app.get('/petchain/api/pet', async(req, res) => {
    contract.methods.getPetDataById(req.query.atrIdPet).call({from: req.query.address}).then((response) => {
        res.json({data: response});
    })
});

app.post('/petchain/api/pet', (req, res) => {
    contract.methods.addPet(req.body.atrPetName).send({from: req.query.address, gas: 1000000}).then(() => {
        res.send('Animal Cadastrado com Sucesso!');
    })
});

app.get('/petchain/api/pet/tutor', async(req, res) => {
    contract.methods.getPetIdsByTutor().call({from: req.query.address}).then((response) => {
        res.json({data: response});
    })
});

// Vacinas
app.get('/petchain/api/vaccine', async(req, res) => {
    contract.methods.getVaccineDataById(req.query.atrIdVaccine).call({from: req.query.address}).then((response) => {
        res.json({data: response});
    })
});

app.post('/petchain/api/vaccine', (req, res) => {
    contract.methods.addVaccine(req.body.atrBrand).send({from: req.query.address, gas: 1000000}).then(() => {
        res.send('Vacina Cadastrada com Sucesso!');
    })
});

// Vacinação
app.get('/petchain/api/vaccination', async(req, res) => {
    contract.methods.getVaccinationDataById(req.query.atrIdVaccination).call({from: req.query.address}).then((response) => {
        res.json({data: response});
    })
});

app.post('/petchain/api/vaccination', (req, res) => {
    contract.methods.addVaccination(req.body.atrProviderVaccine, req.body.atrPetOwner, req.body.atrVetVaccined, req.body.atrVaccineId, req.body.atrPetId).send({from: req.query.address, gas: 1000000}).then(() => {
        res.send('Vacinação Cadastrada com Sucesso!');
    })
});

app.get('/petchain/api/pet/vaccine', async(req, res) => {
    contract.methods.getPetVaccinationListById(req.query.atrIdPet).call({from: req.query.address}).then((response) => {
        res.json({data: response});
    })
});

app.listen(3000, () => {
    console.log('listening on port '+ 3000);
});
