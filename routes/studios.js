const express = require ("express")
const router = express.Router()


router.get('/', (req,res) => {
    res.send({list: "studios"})
    
    })

router.get('/new', (req,res) => {
    res.send ('New studio addition Form')
})

module.exports = router