import ApplicationError from "../../error-handler/applicationError.js";
import PostModel from "../posts/post.model.js";
export default class LikeModel{
    constructor(id,userID,postID){
        this.id=id;
        this.userID=userID;
        this.postID=postID;
    }

    static add(userID,postID){
        const p=PostModel.getAll().find(p=>p.id==postID);
        if(!p){
            throw new ApplicationError("Post to be liked doesnt exists ",400);
        }else{
            const isLiked=likes.find(l=>l.userID==userID&&l.postID==postID);
            if(!isLiked){
                const like=new LikeModel(likes.length+1,userID,postID);
                likes.push(like);
                return "Liked the post";
            }else{
                //if user had already liked the post, and they try to like again, unlike it.
                const index=likes.findIndex(l=>l.userID==userID&&l.postID==postID);
                likes.splice(index,1);
                return "Unliked the post";
            }
        }
        
    }

    static getPostLikes(postID){
        const p=PostModel.getAll().find(p=>p.id==postID);
        if(!p){
            throw new ApplicationError("Post doesnt exists ",400);
        }else{
            const result=likes.filter((l)=>{
                return (l.postID==postID);
            })
    
            return result;
        }
        
    }

    static toggle(userID,postID){
        const p=PostModel.getAll().find(p=>p.id==postID);
        if(!p){
            throw new ApplicationError("Post doesnt exists ",400);
        }else{
        const isLiked=likes.find(l=>l.userID==userID&&l.postID==postID);
        return isLiked;
        }
    }
}

let likes=[];
