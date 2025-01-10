import express from 'express';
import PostController from './post.controller.js';
import { upload } from '../../middlewares/fileUpload.middleware.js';

const PostRouter=express.Router();

const postcontroller=new PostController();

PostRouter.get('/all',postcontroller.getAllPosts);

PostRouter.get('/filter',postcontroller.filterPosts);

PostRouter.get('/:id',postcontroller.getById);

PostRouter.get('/',postcontroller.getUserPost);

PostRouter.post('/',upload.single('imageUrl'),postcontroller.addPost);

PostRouter.put('/:id',upload.single('imageUrl'),postcontroller.updatePost);

PostRouter.delete('/:id',postcontroller.deletePost);

PostRouter.post('/save/:id',postcontroller.savePost);
PostRouter.get('/save/:id',postcontroller.getSavedPosts);

export default PostRouter;
