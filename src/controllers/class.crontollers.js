const passport = require('passport')
const { Users } = require('../models/index.models')
const classCtrl = {}

classCtrl.renderPanel = (req, res) => {
    let Htmldetails = {
        title: "Panel de Estudiante",
        styles: "login.css",
        script: "script.js"

    }
    res.render('class/panel', { Htmldetails })
}


module.exports = classCtrl