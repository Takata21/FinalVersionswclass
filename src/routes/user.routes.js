const { Router } = require('express')
const router = Router()
const { renderSingUpForm, renderloginForm, SignUp, login, logout } = require('../controllers/users.controllers')




router.get('/user/signup', renderSingUpForm)
router.post('/user/signup', SignUp)
router.get('/user/login', renderloginForm)
router.post('/user/login', login)
router.get('/user/logout', logout)


module.exports = router