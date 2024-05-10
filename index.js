import Express from 'express'
import dotenv from 'dotenv'
import  connectDb  from './Database/dbConfig.js'
import cors from 'cors'
import { userRoutes } from './Routes/userRoute.js'
dotenv.config()
const app=Express()
app.use(cors())
app.use(Express.json())



app.get('/',(req,res)=>{
    res.status(200).send('site is working')
})
app.use('/api',userRoutes)
connectDb()
const port=process.env.PORT||4000
app.listen(port,()=>{
    console.log('service running on the port-',port)
})