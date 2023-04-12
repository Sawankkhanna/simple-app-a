require('dotenv').config()
const express = require('express')

let app = express()
const port = process.env.PORT

app.get("/", (req, res) => {
    res.send("<h1>" + process.env.SAMPLE_STRING + "</h1>")
})

app.listen(port, () => console.log(`App is running at port : ${port}`))