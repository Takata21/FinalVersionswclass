const express = require('express')
const router = express.Router()
const home = require('../controllers/home.controllers')



module.exports = app => {
    router.get('/', home.index)


    app.use(router)

}