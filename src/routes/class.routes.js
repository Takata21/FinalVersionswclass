const { Router } = require('express')
const router = Router()
const { renderHome, renderClass, createClass, cancelClass } = require('../controllers/class.crontollers')
router.get('/class/home', renderHome)
router.post('/class/newclass', createClass)
router.get('/class/myclass', renderClass)
router.post('/class/myclass/delete/:class_id', cancelClass)



module.exports = router