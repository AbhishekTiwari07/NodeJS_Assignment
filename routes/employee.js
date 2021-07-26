const router = require('express').Router()
var validator = require('validator')
const fs = require('fs')
const loadData = require('../utilities/loadData')
const saveData = require('../utilities/saveData')
require('dotenv').config()

const file_name = process.env.FILE_NAME || 'employees.txt'
var employees = []

router.get('/employees',(req,res)=>{
    try{
        employees = loadData(file_name)
        if(employees.length == 0)
            throw new Error('No Employee Found')
        return res.send(employees)
    }
    catch(e){
        return res.send({
            'message' : e.message
        })
    }
})

router.get('/employees/:id',(req,res)=>{
    try{
        employees = loadData(file_name)
        if(employees.length == 0)
            throw new Error("No Employee Found")
        const employee = employees.find(item => item.id == req.params.id)
        if(!employee)
            throw new Error("Employee ID not Found")
        return res.send(employee)
    }
    catch(e){
        return res.send({
            'message' : e.message
        })
    }
})

router.post('/employees', (req,res)=>{
    try{
        const {id, name, email, phone} = req.body

        if(!id||!name|| !email|| !phone)
            throw new Error('All fields are required')

        if(!validator.isEmail(email))
            throw new Error('Invalid email format')

        employees = loadData(file_name)
        employees = employees.filter(item => item.id != id)
        employees.push({
            id,
            name,
            email,
            phone
        })
        saveData(file_name, employees)
        return res.send({
            id,
            name,
            email,
            phone
        })
    }
    catch(e){
        return res.send({
            'message' : e.message
        })
    }
})

module.exports = router