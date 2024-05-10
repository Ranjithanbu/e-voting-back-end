import Express from 'express'
import { handleUser } from '../Controller/userController.js'
import { handleLogin } from '../Controller/loginController.js'
export const userRoutes=Express.Router()

userRoutes.post('/registerUser',handleUser)
userRoutes.post('/loginUser',handleLogin)