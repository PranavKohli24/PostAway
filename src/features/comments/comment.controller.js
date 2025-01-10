import CommentModel from "./comment.model.js";

export default class CommentController{
    add(req,res){
        try{
            const postID=parseInt(req.params.id);
            const userID=req.userID;
            const{content}=req.body;
            const newComment={content,postID,userID};

            const createdComment=CommentModel.addComment(newComment);
            return res.status(201).send(createdComment);

        }
        catch(err){
            return res.status(400).send(err.message);
        }
        
    }

    get(req,res){
        const postID=req.params.id;
        const comments=CommentModel.get(postID);
        return res.status(200).send(comments);
    }

    delete(req,res){
        try{
            const commentID=req.params.id;
            const userID=req.userID;
            CommentModel.delete(commentID,userID);
            
            return res.status(200).send("comment is deleted successfully");
        }
        catch(err){
            return res.status(400).send(err.message);
        }
        
    }

    update(req,res){
        try{
            const userID=req.userID;
            const commentID=req.params.id;
            const{content}=req.body;
            const comment={content};
            comment.userID=userID;
            const c=CommentModel.update(commentID,userID,comment);
            return res.status(200).send(c);
        }
        catch(err){
            return res.status(400).send(err.message);
        }
        
    }

}