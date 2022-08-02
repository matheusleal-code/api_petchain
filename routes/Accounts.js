const {web3} = require('../web3Config/web3Config');

const express = require('express');
const router = express.Router();

router.get('/petchain/api/accounts', (req, res) => {
    web3.eth.getAccounts().then(acc => {
        res.json({accounts: acc});
    });
});

module.exports = router;
