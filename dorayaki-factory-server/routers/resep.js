const express = require("express");
const router = express.Router()
const resepcontroller = require('../controllers/ResepController')
const verifytoken = require('../middleware/verifytoken')

router.route('/resep')    
    .get(verifytoken,resepcontroller.lihat)
    .post(verifytoken,resepcontroller.tambah)

module.exports =router