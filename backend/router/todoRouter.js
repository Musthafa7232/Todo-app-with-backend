import express from "express";
import {verifyUserToken} from '../utils/jwt.js'
import {signIn,signUp} from '../controllers/userController.js'
import {userData,createNewTodo,checkOrunchecktodo,deleteTodo} from '../controllers/todoController.js'
const router =express.Router()

router.post('/signup',signUp)
router.post('/signin',signIn)
router.use(verifyUserToken)
router.get('/getUserData',userData)
router.post('/newTodo',createNewTodo)
router.patch('/checkUncheck',checkOrunchecktodo)
router.patch('/deleteTodo',deleteTodo)



export default router