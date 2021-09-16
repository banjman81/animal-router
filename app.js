const express = require("express")
const logger = require("morgan")
const path = require('path')

const animalRouter = require('./routes/animalRouter')

const app = express()
app.set("view", path.join(__dirname, "view"))
app.set("view engine", "ejs")


const PORT = process.env.PORT || 3000;

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use("/api/", animalRouter)

app.listen(PORT, function(){
    console.log(`Server is now running on ${PORT}`);
})