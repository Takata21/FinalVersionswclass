const path = require('path')
const express = require('express')
const exhbs = require('express-handlebars')
const Handlebars = require('handlebars')
const morgan = require('morgan')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const routes = require('../routes/index.routes')
const errorHandler = require('errorhandler')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')

//Initializations
require('../config/passport')

module.exports = app => {
    //setting
    app.set('port', process.env.PORT || 4000)
    app.set('views', path.join(__dirname, '../views'))
    app.engine('.hbs', exhbs({
        defaultLayout: 'main',
        partialsDir: path.join(app.get('views'), 'partials'),
        layoutsDir: path.join(app.get('views'), 'layouts'),
        extname: '.hbs',
        helpers: require('./helpers'),
        handlebars: allowInsecurePrototypeAccess(Handlebars)
    }))

    app.set('view engine', '.hbs')

    //MIDDLEWARE
    app.use(morgan('dev'))
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())
    app.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    }))
    app.use(passport.initialize())
    app.use(passport.session())
    app.use(flash())

    //Global VariaBles

    app.use((req, res, next) => {
        res.locals.success_msg = req.flash('success_msg')
        next()
    })


    app.use(require('../routes/index.routes'))
    app.use(require('../routes/user.routes'))
    app.use(require('../routes/class.routes'))

    //Static files

    app.use('/public', express.static(path.join(__dirname, '../public')))

    //errorHandler
    if ('development' === app.get('env')) {
        app.use(errorHandler)
    }
    return app




}