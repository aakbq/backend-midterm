const express = require('express')
const router = express.Router()
const path = require('path')
const https = require('https')
router
    .route('/')
    .get((req, res) => {
        res.render(path.resolve('./views/menu.ejs'), {price: 1});
    }).post((req, res) => {
    let exchange = req.body.curr.toUpperCase()
    let key = 'C25AA8BF-C42A-4F4C-B507-C02CF3E92EBF';
    let url = `https://rest.coinapi.io/v1/exchangerate/USD/${exchange}?apikey=${key}`
    https.get(url, function (response) {
        response.on('data', data => {
            let a = JSON.parse(data)
            let result = a.rate
            res.render(path.resolve('./views/menu.ejs'), {
                price: result
            });
        })
    });
})
module.exports = router