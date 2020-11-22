const { Router } = require('express')
const router = Router()
const { renderSingUpForm, renderloginForm, SignUp, login, logout, home } = require('../controllers/users.controllers')




router.get('/user/signup', renderSingUpForm)
router.post('/user/signup', SignUp)
router.get('/user/login', renderloginForm)
router.post('/user/login', login)
router.get('/user/logout', logout)
router.get('/user/home', home)


module.exports = router