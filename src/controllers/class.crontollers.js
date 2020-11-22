const passport = require('passport')
const popup = require('node-popup').alert
const { Users, Class } = require('../models/index.models')
const classCtrl = {}

classCtrl.renderHome = (req, res) => {
    let Htmldetails = {
        title: "Home",
        styles: "class.css",
        script: "script.js"

    }
    res.render('class/home', { Htmldetails })
}

classCtrl.renderClass = (req, res) => {
    let Htmldetails = {
        title: "Clases y Cursos",
        styles: "class.css",
        script: "script.js"

    }
    res.render('class/mycourses', { Htmldetails })
}

classCtrl.createClass = async(req, res) => {
    const { subject, hours, classdatetime } = req.body
    console.log(req.body)

    if (subject !== "" & hours !== "" & classdatetime !== "") {
        newClass = new Class({ subject, hours, classdatetime })
        newClass.save()
            .then(() => {

                console.log('bien')

            }, (err) => {
                console.log(err)

            })

        res.redirect('/class/home')
    }

}



classCtrl.renderClass = async(req, res) => {
    const myclass = await Class.find().sort({ createdAt: 'desc' })
    res.render('class/myclass', { myclass })
    console.log(myclass)


}



module.exports = classCtrl