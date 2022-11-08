const express = require ("express")
const router = express.Router()


router.get('/', (req,res) => {
    res.send({list: "studios"})
    
    })

router.get('/new', (req,res) => {
    res.send ('New studio addition Form')
})



router.route('/:studioID')
.get((req,res) => {
    res.send (`Get specific Studio with ${req.params.studioID}`)
})
.put((req,res) => {
    res.send (`Put specific Studio with ${req.params.studioID}`)
})
.delete ((req,res) =>{
    res.send (`Delete specific Studio with ${req.params.studioID}`)
})

module.exports = router