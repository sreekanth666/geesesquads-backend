const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: [3, "Must be at least 3, got {VALUE}"]
    },
    username: {
        type: String,
        required: true,
        min: [3, "Must be at least 3, got {VALUE}"]
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        validator(value) {
            if(!validator.isEmail(value)){
                throw new Error("Enter valid email")
            }
        }
    },
    password: {
        type: String,
        required: true
    }
})

const users = mongoose.model("users", userSchema)
module.exports = users