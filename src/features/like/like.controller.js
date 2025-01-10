import LikeModel from "./like.model.js";

export default class LikeController{
    
    add(req,res){
        try{
            const userID=req.userID;
            const postID=req.params.postId;
            const result=LikeModel.add(userID,postID);
            return res.status(201).send(result);
        }catch(err){
            return res.status(400).send(err.message);
        }
        
    }

    getLikes(req,res){
        try{
            const postID=req.params.postId;
            const result=LikeModel.getPostLikes(postID);
            return res.status(200).send(result);
        }catch(err){
            return res.status(400).send(err.message);
        }
        
    }

    toggleStatus(req,res){
        try{
            const userID=req.userID;
            const postID=req.params.postId;
            const isLiked=LikeModel.toggle(userID,postID);
            if(isLiked){
                return res.status(200).send("Post already Liked");
            }else{
                return res.status(200).send("Not liked");
            }
        }catch(err){
            return res.status(400).send(err.message);
        }
        
    }
    
}