import express from 'express';
import CommentController from './comment.controller.js';

const commentRouter=express.Router();

const commentController=new CommentController();

commentRouter.get('/:id',commentController.get);
commentRouter.post('/:id',commentController.add);
commentRouter.delete('/:id',commentController.delete);
commentRouter.put('/:id',commentController.update);

export default commentRouter;