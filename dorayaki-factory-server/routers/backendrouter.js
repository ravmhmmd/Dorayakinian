const express = require("express");
const router = express.Router()
const bahanbakucontroller = require('../controllers/BahanBakuController')

router.route('/bahan-baku')
    .post(bahanbakucontroller.editBahanBaku)

module.exports = router