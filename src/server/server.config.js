const path = require('path')
const express = require('express')
const exhbs = require('express-handlebars')
const Handlebars = require('handlebars')
const morgan = require('morgan')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const routes = require('../routes/index.routes')
const errorHandler = require('errorhandler')

module.exports = app => {
    //setting
    app.set('port', process.env.PORT || 3000)
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

    //Routes

    routes(app)

    //Static files

    app.use('/public', express.static(path.join(__dirname, '../public')))

    //errorHandler
    if ('development' === app.get('env')) {
        app.use(errorHandler)
    }
    return app


}