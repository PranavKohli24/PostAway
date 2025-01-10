import express from 'express';
import UserController from './user.controller.js';

const UserRouter=express.Router();

const userController=new UserController();

UserRouter.post('/signup',userController.signUp);
UserRouter.post('/signin',userController.signIn);

export default UserRouter;