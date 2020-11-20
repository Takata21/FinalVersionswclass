const { Router } = require('express')
const router = Router()
const { renderHome } = require('../controllers/class.crontollers')




router.get('/class/home', renderHome)
    // router.post('/class/newclass', create)


module.exports = router