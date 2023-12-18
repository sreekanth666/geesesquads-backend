const users = require("../Models/userSchema")

exports.register = async(req, res) => {
    const{name, username, phone, email, password} = req.body
    console.log(req.body);
    try {
        const isUserExists = await users.findOne({email})
        if (isUserExists) {
            res.status(406).json("User already exists. Please login")
        } else {
            const newUser = new users({
                name,
                username,
                phone,
                email,
                password,
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (error) {
        res.status(401).json(`Register API failed. Error: ${error}`)
    }
}

// Logic for resolving login request
exports.login = async(req, res) => {
    const {username, password} = req.body
    console.log(req.body);
    try {
        const isUserExists = await users.findOne({username, password})
        if (isUserExists) {
            res.status(200).json({
                isUserExists
            })
        } else {
            res.status(401).json('Email or password is incorrect')
        }
    } catch (error) {
        res.status(401).json(error)
    }
    
}

