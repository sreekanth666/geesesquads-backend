const mongoose = require('mongoose')

const carsSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        models: {
            type: String,
            default: null
        },
        subCategories: {
            type: Object,
            default: null
        }
    }
})

const cars = mongoose.model("cars", carsSchema)
module.exports = cars