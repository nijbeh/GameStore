const express = require ("express")
const gamerouter = express.Router()


gamerouter.get('/', (req,res) => {
    res.send({list: "games"})
    
    })

gamerouter.get('/new', (req,res) => {
    res.send ('New Game Addition Form')
})

module.exports = gamerouter