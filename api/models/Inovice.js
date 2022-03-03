const mongoose = require('mongoose')
const NewInovice = new mongoose.Schema({
    id: {
        type: String,
    },
    createdAt: {
        type: String,
    },
    paymentDue: {
        type: String,
    },
    senderAddress: {
        street: String,
        city: String,
        postCode: String,
        country: String,
    },
    clientAddress: {
        street: String,
        city: String,
        postCode: String,
        country: String,
      },
    clientName: {
        type: String,
    },
    clientEmail: {
        type: String,
    },
    
    paymentTerms: {
        type: String,
    },
    description: {
        type: String,
    },
    items: [{
        name: String,
        quantity: Number,
        price: Number,
        total: Number,
    }],
    status: {
        type: String,
    },

}, {
    timestamps: true
})
module.exports = mongoose.model('myInovice', NewInovice)