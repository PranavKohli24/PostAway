import express from 'express';
import swagger from 'swagger-ui-express';
import cors from 'cors';
import UserRouter from './src/features/user/user.routes.js';
import PostRouter from './src/features/posts/post.router.js';
import commentRouter from './src/features/comments/comment.router.js';
import jwtAuth from './src/middlewares/jwt.middleware.js';
import apiDocs from './swagger.json' assert {type:'json'};
import likeRouter from './src/features/like/like.router.js';
import logMiddleware from './src/middlewares/logger.middleware.js';

const server=express();

server.use(express.json());

server.use(cors()); //it will give access to public 

server.use(logMiddleware);

//For documentation
server.use('/api-docs',swagger.serve,swagger.setup(apiDocs));

server.use('/api/posts',jwtAuth,PostRouter);

server.use('/api',UserRouter);

server.use('/api/comments',jwtAuth,commentRouter);

server.use('/api/likes',jwtAuth,likeRouter);

server.get('/',(req,res)=>{
    res.send("Welcome to socialMedia app")
});


//middleware to handle 404 requests.
//it will always be executed
//that means it will come here only if path doesnt match
server.use((req,res)=>{
    res.status(404).send("API not found. Please visit our documentation at localhost:3000/api-docs");
})

//error-handler middleware
server.use((err,req,res,next)=>{
    res.status(500).send("Something went wrong");
});

server.listen(3000,()=>{
    console.log("server is listening on port 3000")
});

