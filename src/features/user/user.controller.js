import jwt from 'jsonwebtoken';

import UserModel from "./user.model.js";

export default class UserController{

    signUp(req,res){
        const{name,email,password}=req.body;
        const user=UserModel.signUp(name,email,password);
        res.status(201).send(user);
    }

    signIn(req,res){
        const result=UserModel.signIn(req.body.email,req.body.password);
        if(!result){
            res.status(400).send("Incorrect credentials");
        }else{
            //1.create token
            const token=jwt.sign({userID:result.id,email:result.email},"AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz",{
                expiresIn:'1h',
            });
            //2.send token.
            return res.status(200).send(token);
        }
    }
}