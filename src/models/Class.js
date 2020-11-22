const { Schema, model } = require("mongoose")


const classSchema = new Schema({
    subject: { type: String, require: true },
    hours: { type: String, require: true },
    classdatetime: { type: Date, required: true }
}, {
    timestamps: true
})

module.exports = (model('Class', classSchema))