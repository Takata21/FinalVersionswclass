const { Router } = require('express')
const router = Router()

const { renderHome, renderClass, createClass } = require('../controllers/class.crontollers')
router.get('/class/home', renderHome)
router.post('/class/newclass', createClass)
router.get('/class/myclass', renderClass)


module.exports = router