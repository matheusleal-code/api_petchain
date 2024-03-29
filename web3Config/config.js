module.exports = Object.freeze({
    CONTRACT_ADDRESS: '0x0b3b082Fa33632C77618c36e96c0EeF9dc8CD44B',
    CONTRACT_ABI:[
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_petName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "rgaAnimal",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "birthDate",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "petBreed",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "maleOrFemale",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "specie",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "color",
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
                },
                {
                    "internalType": "address",
                    "name": "userAddress",
                    "type": "address"
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
                    "name": "vaccineProvider",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "petOwner",
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
                },
                {
                    "internalType": "string",
                    "name": "vaccinationDate",
                    "type": "string"
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
                },
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "manufacturingDate",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "expirationDate",
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
                },
                {
                    "internalType": "string",
                    "name": "birthDate",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "petBreed",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "maleOrFemale",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "specie",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "color",
                    "type": "string"
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
            "inputs": [],
            "name": "getPetsByUserLogged",
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
                    "name": "_user",
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
                },
                {
                    "internalType": "string",
                    "name": "vaccinationDate",
                    "type": "string"
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
                },
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "manufacturingDate",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "expirationDate",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getVaccinesByUserLogged",
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
            "name": "myVaccines",
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
                    "name": "idPet",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "vet",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "sendPermission",
                    "type": "bool"
                }
            ],
            "name": "petPermissionAccess",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
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
                    "name": "userId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "userAddress",
                    "type": "address"
                },
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
                    "name": "vaccineId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "vet",
                    "type": "address"
                }
            ],
            "name": "vaccinePermissionAccess",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "vaccineRegisters",
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
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "manufacturingDate",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "expirationDate",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "internalType": "enum PetChain.VaccineStatus",
                    "name": "status",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
});