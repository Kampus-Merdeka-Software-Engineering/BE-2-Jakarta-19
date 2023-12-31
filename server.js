const express = require("express");
const server = express();
const cors = require("cors");

server.use(cors());


const allRouter = require("./routes");

const PORT = process.env.PORT || 3000;


server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(allRouter);

server.listen(PORT,"0.0.0.0",  () => {
    console.log(`port berjalan di http://localhost:${PORT}`);
});

