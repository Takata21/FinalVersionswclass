const { Router } = require('express')
const router = Router()
const { renderPanel } = require('../controllers/class.crontollers')




router.get('/class/newclass', renderPanel)


module.exports = router