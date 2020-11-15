const express = require('express')
const config = require('./server/server.config')
const Flash = require('connect-flash');

//Database
require('./database')

//Server

const app = config(express());

// //Global Variables
// app.use((req, res, next) => {
//     res.locals.success_msg = req.flash('success_msg')
//     res.locals.error_msg = req.flash('error_msg')
//     res.locals.error = req.flash('error')
//     res.locals.user = req.user || null

//     next()
// })

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})
