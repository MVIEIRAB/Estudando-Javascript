const express = require('express')
const app = express()

app.get('/', (req, res) => {
     res.send('alo mano')
})

app.get('/teste', (req, res) => {
    res.send('alo mano')
})

app.listen(3000)