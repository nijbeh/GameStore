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
    res.send (req.user)
})
.put((req,res) => {
    res.send (`Put specific Studio with ${req.params.studioID}`)
})
.delete ((req,res) =>{
    res.send (`Delete specific Studio with ${req.params.studioID}`)
})

const studio_names = [{name: "Electronic Arts"}, {name : "Activision"}]

router.param("studioID", (req,res,next,studio_id) =>{
    req.user = studio_names[studio_id]
    next()
})

module.exports = router