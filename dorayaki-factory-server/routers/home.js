const express = require("express");
const router = express.Router()
const homecontroller = require('../controllers/homecontroller')
const verifytoken = require('../middleware/verifytoken')

router.route('/')
    .get(verifytoken,homecontroller.index)
    .post(homecontroller.post)

module.exports =router