const express = require("express")
const server = express()

// nambah router
const allRouter = require("./routes")

const PORT = process.env.PORT || 8000

server.use(express.json())
server.use(allRouter)

server.listen(PORT, () =>{
    console.log("server running on port", PORT);
})
