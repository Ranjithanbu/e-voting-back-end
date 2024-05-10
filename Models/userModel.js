import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true

    },
    password: {
        type: String,
        require: true,
        unique: true
    },
    role:{
        type:String,
        Enumerator:['user','admin'],
        default:'user'
    }

})

export const user=mongoose.model('User',userSchema)