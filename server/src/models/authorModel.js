const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({

    title: {
        type: String,
        enum: ["Mrs", "Mr", "Miss"],
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        match: /.+\@.+\..+/,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    likes:{
        type:Object
    }
}
)

module.exports = mongoose.model('Author', authorSchema)