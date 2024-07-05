import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors';
import { createTask, deleteTask, getAllTasks,getTaskById,updateTask } from './controllers/index.js'
import {signUp ,login } from './controllers/auth.js'
const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
const port = process.env.PORT||5000
app.listen(port,()=>{
console.log(`Server is running on ${port}`)
}

)
app.get('/api/todos/:id',getTaskById)
app.get('/api/todos',getAllTasks)
app.put('/api/todos/:id',updateTask )
app.post('/api/todos',createTask)
app.post('/api/todos/signup',signUp)
app.post('/api/todos/login',login)
app.delete('/api/todos/:id',deleteTask)
mongoose.connect(process.env.Connection)
.then(()=>console.log("Database Connected"))
.catch((err)=>console.log(err))