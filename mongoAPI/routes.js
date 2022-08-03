const nodemailer = require('nodemailer');
const bcrypt = require("bcrypt");
const express = require('express');
const User = require("./userModel");
const Solicitation = require("./solicitationModel");
const router = express.Router()
const { web3, contract } = require('../web3Config/web3Config');
require("dotenv").config();
const jwt = require('jsonwebtoken');

const userType = [
    'PROVIDER',
    'VET',
    'TUTOR',
    'VERIFIER',
    'ADMIN'
]

createBlockchainAddress = cb => {
    cb(web3.eth.accounts.create());
};

async function createNewBlockchainAddress(password) {
    return await web3.eth.personal.newAccount(password)
}

//Post Method
router.post('/signup', async (req, res) => {
    const body = req.body;
    let address;

    if (!body.atrName || !body.atrEmail || !body.atrPassword || !body.atrUserType) {
        return res.status(400).send({ error: "Preencha todos os campos" });
    }

    if (body.atrUserType == 2) {
        address = await createNewBlockchainAddress(body.atrPassword);
        const user = new User(body);
        const salt = await bcrypt.genSalt(10);
        user._id = address;
        user.atrPassword = await bcrypt.hash(user.atrPassword, salt);
        user.atrUserType = userType[body.atrUserType];
        user.save().then((doc) => res.status(201).send(doc));

        const transaction = {
            to: user._id,
            value: 10000000000,
            gas: 300000
        }

        const signedTx = await web3.eth.accounts.signTransaction(transaction, process.env.PRIVATE_KEY);

        web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    } else {
        address = await createNewBlockchainAddress(body.atrPassword);
        const user = new Solicitation(body);
        user._id = address;
        user.atrUserType = userType[body.atrUserType];
        const salt = await bcrypt.genSalt(10);
        user.atrPassword = await bcrypt.hash(user.atrPassword, salt);
        user.save().then(() => res.status(200).send({ message: 'Solicitação de cadastro efetuada com sucesso!' }));
    }
});

router.post('/login', async (req, res) => {
    const body = req.body;
    const user = await User.findOne({ atrEmail: body.atrEmail });
    if (user) {
        const validPassword = await bcrypt.compare(body.atrPassword, user.atrPassword);
        if (validPassword) {
            const token = jwt.sign({ id: user.atrPassword }, process.env.SECRET, {
                expiresIn: 30000 // expires in 3h
            });
            res.append('token', token)
            res.status(200).json({ userData: user });
        } else {
            res.status(400).json({ message: 'Senha inválida' });
        }
    } else {
        res.status(401).json({ error: 'Usuário não existe' });
    }
})

router.get('/register/solicitations', async (req, res) => {
    const userLogged = await User.findOne({ _id: req.query.address });
    console.log(userLogged)
    if (userLogged?.atrUserType == 'ADMIN') {
        const solicitations = await Solicitation.find();
        if (solicitations) {
            return res.status(200).json(solicitations);
        } else {
            return res.status(403).json('Acesso negado');
        }
    } else {
        return res.status(404).send({ message: 'Acesso negado' })
    }
});

//Post Method
router.post('/register/confirm', async (req, res) => {
    const _id = req.body.address;

    if (_id) {
        const solicitation = await Solicitation.findOne({ _id: _id });
        const userLogged = await User.findOne({ _id: req.query.address });
        const user = new User();
        if (solicitation && userLogged.atrUserType == 'ADMIN') {
            user._id = _id;
            user.atrName = solicitation.atrName;
            user.atrEmail = solicitation.atrEmail;
            user.atrPassword = solicitation.atrPassword;
            user.atrUserType = solicitation.atrUserType;

            user.save().then((doc) => {
                const request = new Solicitation(solicitation);
                request.delete();
            })

            // Salvar usuário no contrato inteligente
            try {
                const response = await contract.methods.addUser(user.atrName, user.atrUserType, user._id).send({ from: req.query.address, gas: 1000000 });
                res.status(201).send(response);
            } catch (err) {
                res.status(500).send('Erro ao publicar informações na blockchain');
            }

            const transaction = {
                to: user._id,
                value: 10000000000,
                gas: 300000
            }

            const signedTx = await web3.eth.accounts.signTransaction(transaction, process.env.PRIVATE_KEY);

            web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        }
    } else {
        return res.status(404).send({ error: "Usuário não autorizado" });
    }

});

async function init() {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash('1234', salt);
    const user = await User.findOne({ _id: accounts[0] });
    if (!user) {
        const user = new User();
        user._id = accounts[0];
        user.atrName = 'ADMIN';
        user.atrEmail = 'admin@gmail.com';
        user.atrPassword = password;
        user.atrUserType = 'ADMIN';

        user.save();
    }
}

init();

module.exports = router;