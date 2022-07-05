module.exports = Object.freeze({
    CONTRACT_ADDRESS: proccess.env.NODE_ENV,
    CONTRACT_ABI:[
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_petName",
                    "type": "string"
                }
            ],
            "name": "addPet",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "userName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "userType",
                    "type": "string"
                }
            ],
            "name": "addUser",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "providerVaccine",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "petOwner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "vetVaccined",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "vaccineId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "petId",
                    "type": "uint256"
                }
            ],
            "name": "addVaccination",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "brand",
                    "type": "string"
                }
            ],
            "name": "addVaccine",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "getPetDataById",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "petId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "petOwner",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "petName",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPetIdsByTutor",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "getPetVaccinationListById",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "getUserDataByAddress",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "userName",
                    "type": "string"
                },
                {
                    "internalType": "enum PetChain.UserType",
                    "name": "userType",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "getVaccinationDataById",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "vaccinationId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "providerVaccine",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "petOwner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "vetVaccined",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "vaccineId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "petId",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "getVaccineDataById",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "vaccineId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "brand",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "myPets",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "numberOfPets",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "numberOfUsers",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "numberOfVaccinations",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "numberOfVaccines",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "petVaccinationRegisters",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "userAccounts",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
});