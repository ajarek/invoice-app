const express = require('express')
const router = express.Router()
const newInovice = require('../models/Inovice')
const mysort = {
    createdAt: -1
}
router.get('/display', async (req, res) => {
    const inovice = await newInovice.find().sort(mysort)
    res.json(inovice)
})
router.post('/save', async (req, res) => {
    try {
        const inovice = new newInovice({

            id: req.body.id,
            createdAt: req.body.createdAt,
            paymentDue: req.body.paymentDue,
            description: req.body.description,
            paymentTerms: req.body.paymentTerms,
            clientName: req.body.clientName,
            clientEmail: req.body.clientEmail,
            status: req.body.status,
            senderAddress: {
                street: req.body.senderAddress.street,
                city: req.body.senderAddress.city,
                postCode: req.body.senderAddress.postCode,
                country: req.body.senderAddress.country
            },
            clientAddress: {
                street: req.body.clientAddress.street,
                city: req.body.clientAddress.city,
                postCode: req.body.clientAddress.postCode,
                country: req.body.clientAddress.country
            },
            items: [{
                name: req.body.items[0].name,
                quantity: req.body.items[0].quantity,
                price: req.body.items[0].price,
                total: req.body.items[0].total
            }],
            total: req.body.total,
        })
        const inoviceNew = await inovice.save()

        res.send('save ok')
    } catch (err) {
        res.status(500).send(err)
    }
})
router.get('/editOne/:id', async (req, res) => {
    const {
        id
    } = req.params
    const getData = await newInovice.findOne({
        _id: id
    })
    res.send(getData)
})
router.delete('/delete/:_id', async (req, res) => {
    const id = req.params._id
    await newInovice.deleteOne({
        _id: id
    })
    res.sendStatus(204)
})

router.put('/update/:id', (req, res) => {
    const {
        id
    } = req.params
    const {
        clientName,
        clientAddress,
        items
    } = req.body
    const {
        street,
        city,
        postCode,
        country
    } = clientAddress

    newInovice.updateOne({
            _id: id
        }, {
            clientName,
            clientAddress: {
                city,
                street,
                postCode,
                country
            },
            items: {
                name: items[0].name,
                quantity: items[0].quantity,
                price: items[0].price,
                total: items[0].total
            }
        })
        .then(() => {
            console.log('successfuly! updated the Post!')
            res.sendStatus(204)
        })
        .catch(() => {
            console.log('error!')
            res.sendStatus(500)
        })
})
module.exports = router