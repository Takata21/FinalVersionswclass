const { Schema, model } = require('mongoose')


const courseSchema = new Schema({
    user: { type: String, default: 'test' },
    math: { type: Boolean, default: false },
    english: { type: Boolean, default: false },
    physic: { type: Boolean, default: false }
}, {
    timestamps: true
})
module.exports = (model('courses', courseSchema))