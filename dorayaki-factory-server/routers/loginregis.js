const express = require("express");
const router = express.Router()
const authcontroller = require('../controllers/authcontroller')

router.route('/login')
    .post(authcontroller.login)
router.route('/registrasi')
    .post(authcontroller.register)

module.exports = router