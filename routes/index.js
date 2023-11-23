const express = require("express")
const router = express.Router()

const tabelRouter = require('./tabel.router')

router.use("/tabel", tabelRouter)

module.exports = router
