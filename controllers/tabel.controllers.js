const models = require("../models")
const { Tabel } = models

module.exports = {
    getTabel: async (req, res) =>{
        const daftar = await Tabel.findAll()
        res.json({
            message: "succes get data",
            data: daftar
        })
    },


    addtabel: async (req, res)=>{
       const dataTabel = req.body
       const pesanTabel = new Tabel(dataTabel)
       pesanTabel.save()
       res.json({
        status: "success add data"
       })
        

    }

    

}