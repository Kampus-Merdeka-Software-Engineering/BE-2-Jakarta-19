const express = require("express");
const server = express();
const cors = require("cors");

server.use(cors());


const allRouter = require("./routes");

const PORT = process.env.PORT || 5000;


server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(allRouter);

<<<<<<< HEAD
server.listen(PORT,"0.0.0.0",  () => {
=======
server.listen(PORT, "0.0.0.0", () => {
>>>>>>> a3f72a509de33111b3cc08af6005555cb7939be6
    console.log(`port berjalan di http://localhost:${PORT}`);
});

