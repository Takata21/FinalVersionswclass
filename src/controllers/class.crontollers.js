const passport = require('passport')
const { Users, Class } = require('../models/index.models')
const classCtrl = {}

classCtrl.renderHome = (req, res) => {
    let Htmldetails = {
        title: "Home",
        styles: "styles.css",
        script: "script.js"

    }
    res.render('class/home', { Htmldetails })
}

// classCtrl.newClass = (req, res) => {

// }



module.exports = classCtrl