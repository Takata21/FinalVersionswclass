const { Schema, model } = require("mongoose")


const classSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        require: true
    },
    professor: {
        type: String,
        require: true
    }
    // user:{
    //     type:String,
    //     required:true
    // }


}, {
    timestamps: true
})

module.exports = (model('class', classSchema))