const cars = require("../Models/carsSchema")

exports.createList = async(req, res) => {
    const {category} = req.body
    console.log(req.body);
   
        try {
            const newCategory = new cars({
                category: category
            })
            await newCategory.save()
            res.status(200).json("Category added")
        } catch (error) {
            res.status(401).json(error)
        }
}

exports.allCategory = async(req, res) => {
    try {
        const allCategory = await cars.find({})
        res.status(200).json(allCategory)
    } catch (error) {
        res.status(401).json(error)
    }
}