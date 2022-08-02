const express = require('express');
const app = express();
const cors = require('cors');

const Web3 = require('web3');
const contractConfig = require('./web3Config/config');

app.use(cors());
app.use(express.json());

const web3 = new Web3("http://localhost:7545");
const contract = new web3.eth.Contract(contractConfig.CONTRACT_ABI, contractConfig.CONTRACT_ADDRESS);

let accounts;

function getAccounts() {
    web3.eth.getAccounts().then(acc => {
        accounts = acc;
        console.log('acc', acc);
        web3.eth.getBalance(acc[1]).then(balance => {
            console.log('balance', balance);
        })
    });
}

getAccounts();

// Accounts
const accountsRoute = require('./routes/Accounts');

// Pets
const petsRoute = require('./routes/Pets')

// Vacinas
const vaccinesRoute = require('./routes/Vaccines');

// Usuários
const usersRoute = require('./routes/Users');

// Vacinação
const vaccinationsRoute = require('./routes/Vaccinations');
	
// Login
const loginRoute = require('./routes/Login');

app.use('/', accountsRoute, petsRoute, vaccinesRoute, usersRoute, vaccinationsRoute, loginRoute)

app.listen(3000, () => {
    console.log('listening on port ' + 3000);
});
