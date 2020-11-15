const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const { Users } = require('../models/index.models')

passport.use(new localStrategy({
    usernameField: 'user',
    passwordField: 'password'
}, async(user, password, done) => {
    //Math Username
    const username = await Users.findOne({ user })


    if (!username) {
        return done(null, false, { message: 'Not User Found' })
    } else {
        //'Match password´s User'
        const match = await username.matchPassword(password)
        if (match) {
            return done(null, username)
        } else {
            return done(null, false, { message: 'Incorrect Password' })
        }

    }

}))
passport.serializeUser((username, done) => {
    done(null, username.id)
})
passport.deserializeUser((id, done) => {
    Users.findById(id, (err, username) => {
        done(err, username)
    })
})

module.exports = {}