const { Router } = require('express')
const router = Router()
const { renderPanel } = require('../controllers/class.crontollers')




router.get('/class/panel', renderPanel)


module.exports = router