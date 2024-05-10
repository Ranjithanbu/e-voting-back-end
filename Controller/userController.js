import { user } from "../Models/userModel.js"
import bcrypt from 'bcryptjs'
export const handleUser=async(req,res)=>{
    const {userName,email,password}=req.body
   
    try {
        if(!userName||!email||!password){
            return res.status(200).json({message:'all feilds are required'})
        }
        
        const checkUser=await user.find({userName})
        if(checkUser[0]?.userName){
         return res.status(400).json({message:"user already existed"})
        }        
        const checkEmail=await user.find({email})
        if(checkEmail[0]?.email){
         return  res.status(400).json({message:"email already existed"})
        }

const newPassword=bcrypt.hashSync(password,10)
const saveUser=new user({
    userName,
    email,
    password:newPassword
})
await saveUser.save()    
res.status(200).json({message:'user registerd successfully'})       
    } catch (error) {
        
        res.status(500).json({message:error})
    }
}