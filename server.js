const express = require('express')
const employee = require('./routes/employee')
const fs = require('fs')
require('dotenv').config()
const app = express()

app.use(express.json())
app.use(employee)

const port = process.env.PORT || 3001

app.listen(port, (err)=>{
    if(err)
        return console.log(err.message)
    console.log(`Server is up at Port ${port}`)
})