const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./mongoAPI/routes');

const { web3 } = require('./web3Config/web3Config');

app.use(cors());
app.use(express.json());

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

require('./mongoAPI/mongoConfig')
app.use('/mongo/api', routes);

app.listen(3000, () => {
    console.log('listening on port ' + 3000);
});