import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

export const connectDb=async()=>{
    try {
       
    await mongoose.connect(process.env.MONGOURL);
    console.log('db connected successfully')    

    } catch (error) {
        console.log(error);
    }
}

export default connectDb