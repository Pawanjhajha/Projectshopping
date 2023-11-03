const express=require('express')
const app=express()
app.use(express.json())
const apiRouter=require('./routers/api')
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/1030amreactproject')





app.use('/api',apiRouter)
app.use(express.static('public'))
app.listen(5000, ()=>{console.log('server run on port 5000')})