const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    _id: {
        required: true,
        type: String
    },
    atrName: {
        required: true,
        type: String
    },
    atrEmail: {
        required: true,
        type: String
    },
    atrPassword: {
        required: true,
        type: String
    },
    atrUserType: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('requestRegistration', requestSchema)