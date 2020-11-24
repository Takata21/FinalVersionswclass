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
    let Htmldetails = {
        title: "Clases y Cursos",
        styles: "class.css",
        script: ""

    }
    const myclass = await Class.find().sort({ createdAt: 'desc' })
    res.render('class/myclass', { myclass, Htmldetails })
    for (let index = 0; index < myclass.length; index++) {
        console.log(myclass[index].subject)

    }
    myclass.forEach(element => {
        console.log(element.subject)

    });

}

classCtrl.cancelClass = async(req, res) => {
    await Class.findByIdAndDelete(req.params.class_id)
    console.log(req.params)
    res.redirect('/class/myclass')

}



module.exports = classCtrl