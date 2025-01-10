import express from "express";
import LikeController from "./like.controller.js";

const likeRouter=express.Router();

const likecontroller=new LikeController();

likeRouter.post('/:postId',likecontroller.add);

likeRouter.get('/:postId',likecontroller.getLikes);

likeRouter.get('/toggle/:postId',likecontroller.toggleStatus);

export default likeRouter;