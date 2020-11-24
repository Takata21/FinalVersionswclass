const passport = require('passport')
const { Users } = require('../models/index.models')
const userCtrl = {}


userCtrl.renderSingUpForm = (req, res) => {
    let Htmldetails = {
        title: "Registro",
        styles: "login.css",
        script: "script.js"

    }
    res.render('users/signup', { Htmldetails })
}

userCtrl.renderloginForm = (req, res) => {
    let Htmldetails = {
        title: "Iniciar Sesion",
        styles: "login.css",
        script: "login.js"

    }
    res.render('users/login', { Htmldetails })
}

userCtrl.SignUp = async(req, res) => {
    const errors = []
    console.log(req.body)
    const { name, user, email, password, password2 } = req.body
    if (password !== password2) {
        errors.push({ text: 'password do not math' })

    }
    if (password.length < 4) {
        errors.push({ text: 'Password must be a least 4 character' })
    }
    if (errors.length > 0) {
        res.redirect('/user/signup', { errors })

    } else {

    }


    const emailUser = await Users.findOne({ email: email })
    const userName = await Users.findOne({ user: user })
    if (emailUser || userName) {
        console.log('EMAIL REPETIDO')
    } else {
        const newUser = new Users({ name, user, email, password })
        newUser.password = await newUser.encryptPassword(password)
        await newUser.save()
        req.flash('success_msg', 'Use created Successfully')
        res.redirect('/user/login')
    }

}

userCtrl.login = passport.authenticate('local', {
    failureRedirect: '/user/login',
    successRedirect: '/class/home',
    failureFlash: true
})

userCtrl.logout = (req, res) => {
    req.logout()
    req.flash(req.flash('success_msg', 'You are logged out now.'))
    res.redirect('/user/login')
}
userCtrl.home = (req, res) => {
    let Htmldetails = {
        title: "Iniciar Sesion",
        styles: "login.css",
        script: "login.js"

    }
    res.render('users/home', { Htmldetails })
}

module.exports = userCtrl