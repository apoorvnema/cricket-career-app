const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const playerRoute = require("./routes/player");
const database = require("./config/database")

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/player", playerRoute);

database
    .sync()
    .then(result => app.listen(3000, () => { console.log("Server is running on port 3000") }))
    .catch(err => console.log(err))

