import ApplicationError from "../../error-handler/applicationError.js";
import PostModel from "../posts/post.model.js";

export default class CommentModel{
    constructor(userID,postID,content,id){
        this.userID=userID;
        this.postID=postID;
        this.content=content;
        this.id=id;
    }

    static addComment(comment){
        const c=PostModel.getAll().find(c=>c.id==comment.postID);
        if(!c){
            throw new ApplicationError("Post unavailable",400);
        }else{
            comment.id=comments.length+1;
            comments.push(comment);
            return comment;
        }
        
    }

    static get(postID){
        const comment=comments.filter((p)=>p.postID==postID);
        return comment;
    }

    static delete(commentID,userID){
        const commentIndex=comments.findIndex(c=>c.userID==userID&&c.id==commentID);
        if(commentIndex==-1){
            throw new ApplicationError("comment not found",400);
        }else{
            comments.splice(commentIndex,1);
        }
    }

    static update(commentID,userID,comment){
        const c=comments.find(c=>c.id==commentID&&c.userID==userID);
        if(!c){
            throw new ApplicationError("comment doesnot exist");
        }
        comment.postID=c.postID;
        comment.id=c.id;
        const cid=comments.findIndex(c=>c.id==commentID&&c.userID==userID);
        comments[cid]=comment;
        return comment;
    }
}

let comments=[];