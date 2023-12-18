const express = require('express')
const router = new express.Router()
const usersController = require('../Controllers/usersController')
const listController = require('../Controllers/listController')

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.post('/list/create', listController.createList)
router.post('/list/getall', listController.allCategory)



module.exports = router