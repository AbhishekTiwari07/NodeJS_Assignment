const router = require('express').Router()
const fs = require('fs')
const loadData = require('../utilities/loadData')
const saveData = require('../utilities/saveData')
require('dotenv').config()

const name = process.env.FILE_NAME || 'employees.txt'
var employees = []

router.get('/employees',(req,res)=>{
    employees = loadData(name)
    if(employees.length == 0)
        return res.send({
            'message' : 'No employee exist'
        })
    res.send(employees)
})

router.get('/employees/:id',(req,res)=>{
    employees = loadData(name)
    if(!employees)
        return res.send({
            'message' : 'No employee found'
        })
    const employee = employees.find(item => item.id == req.params.id)
    if(!employee)
        return res.send({
            "message" : "No employee found"
        })
    res.send(employee)
})

router.post('/employees', (req,res)=>{
    data = req.body
    employees = loadData(name)
    employees = employees.filter(item => item.id != data.id)
    employees.push(data)
    saveData(name, employees)
    res.send(data)
})

module.exports = router