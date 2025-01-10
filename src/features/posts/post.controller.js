import PostModel from "./post.model.js";

export default class PostController{
    addPost(req,res){
        const{caption}=req.body;
        const newPost={
            caption,
            imageUrl:req.file.filename
        }
        newPost.userID=req.userID;
        //console.log(`newPost:${newPost}`);
        const createdPost=PostModel.add(newPost);
        return res.status(201).send(createdPost);
    }
    getAllPosts(req,res){
        const posts=PostModel.getAll();

        //PAGINATION
        const page=req.query.page;
        const limit=req.query.limit;
        if(page&&limit){
            const startIndex=(page-1)*limit;
            const endIndex=page*limit;
            const post=posts.slice(startIndex,endIndex);
            return res.status(200).send(post);
        }else{
            return res.status(200).send(posts);
        }
    }
    
    getById(req,res){
        const id=req.params.id;
        const post=PostModel.getById(id);
        return res.status(200).send(post);
    }

    getUserPost(req,res){
        const userID=req.userID;
        const post=PostModel.getByUserID(userID);
        return res.status(200).send(post);
    }

    updatePost(req,res){
        try{
            const userID=req.userID;
            const postID=req.params.id;
            const{caption}=req.body;
            const post={
                caption,
                imageUrl:req.file.filename,
            }
            post.userID=userID;
            const p=PostModel.update(postID,userID,post);
            return res.status(200).send(p);
        }catch(err){
            return res.status(400).send(err.message);
        }
        
    }

    deletePost(req,res){
        try{
            const postID=req.params.id;
            const userID=req.userID;
            PostModel.delete(postID,userID);
            
            return res.status(200).send("Post is deleted successfully");
            
        }
        catch(err){
            return res.status(400).send(err.message);
        }
        
    }

    filterPosts(req,res){
        const{caption}=req.query;
        const p=PostModel.filterPosts(caption);
        return res.status(200).send(p);
    }

    savePost(req,res){
        try{
            const userID=req.userID;//user who wants to save that post.
            const postID=parseInt(req.params.id);
            PostModel.save(postID,userID);
            return res.status(201).send("Post saved successfully");
        }catch(err){
            return res.status(400).send(err.message);
        }
    }

    getSavedPosts(req,res){
        const savedPosts=PostModel.getSaved(req.userID);
        return res.status(200).send(savedPosts);
    }
}