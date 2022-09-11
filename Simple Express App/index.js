const express = require("express")
const app = express()

app.listen(3000, () => {
    console.log("Servers are online!")
})


app.get("/", (req,res) => {
    res.send("Welcome to your express app!")
})