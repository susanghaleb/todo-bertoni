const express = require('express');
const router = express.Router();
const fs = require('fs');

const routeFile  = 'mock/todos.json'

const rowData =  fs.readFileSync(routeFile); 
const todosMock = JSON.parse(rowData)


router.post('/create',  (req, res)=>{
    const { body } = req 
    fs.writeFileSync(routeFile, JSON.stringify([ ...todosMock, body], null, 2) );  
    res.json({status: 200, message: `the task ${body.task}with id ${body.id} is created`})
})

router.get('/read', (req, res)=>{
    res.json(todosMock)
})

router.put('/update', (req, res)=>{
    const { body } = req
    todosMock.filter(taks => taks.id !== body.id)
    fs.writeFileSync(routeFile, JSON.stringify([ ...todosMock.filter(taks => taks.id !== body.id), body], null, 2) )    
    res.json({status: 200, message: `the task ${body.task} with id ${body.id} is updated`})
})

router.delete('/delete',(req, res)=>{
    const { body } = req
    todosMock.filter(taks => taks.id !== body.id)
    fs.writeFileSync(routeFile, JSON.stringify([ ...todosMock.filter(taks => taks.id !== body.id)], null, 2) );  
    res.json({status: 200, message: `the task ${body.task} with id ${body.id} is deleted`})
})



module.exports  = router