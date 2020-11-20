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

classCtrl.renderClass = (req, res) => {
    let Htmldetails = {
        title: "Clases y Cursos",
        styles: "styles.css",
        script: "script.js"

    }
    res.render('class/mycourses', { Htmldetails })
}

classCtrl.createClass = (req, res) => {
    res.send('Creating class')
}

// classCtrl.newClass = (req, res) => {

// }



module.exports = classCtrl