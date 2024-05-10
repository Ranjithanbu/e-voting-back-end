import { user } from "../Models/userModel.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
export const handleLogin=async(req,res)=>{
    const {userName,password}=req.body
    dotenv.config()
    try {
       if(!userName||!password){
        return res.status(200).json({message:'all feilds are required'})
          } 
const findUser=await user.find({userName})

 if(!findUser[0]?.userName){
    
 return res.status(401).json({message:'user not found'})
 }
 const validate=bcrypt.compareSync(password,findUser[0].password)
 if(!validate){
    
    return res.status(401).json({message:'incorrect password'})
 }
 const data={
   userName:findUser[0].userName,
   email:findUser[0].email,
   role:findUser[0].role
 }
 const token=await jwt.sign({_id:findUser[0]._id},process.env.secret,{expiresIn:'1hr'})
 
 res.status(200).cookie('token',token,{
   httpOnly:true,
   sameSite:'none',
   expires:new Date(Date.now()+24*60*60*1000),
   secure:true
}).json({message:'sign in successfull',data})
    } catch (error) {
        
res.status(500).json({messgae:error.message})

    }
}