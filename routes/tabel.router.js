const express = require("express")
const router = express.Router()



const {
    getTabel,
    addtabel

} = require("../controllers/tabel.controllers")



router.get("/", getTabel)
router.post("/", addtabel)

module.exports = router