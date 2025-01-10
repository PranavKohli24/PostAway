import ApplicationError from "../../error-handler/applicationError.js";

export default class PostModel{
    constructor(id,userID,caption,imageUrl){
        this.id=id;
        this.userID=userID;
        this.caption=caption;
        this.imageUrl=imageUrl;
    }

    static add(post){
        post.id=posts.length+1;
        posts.push(post);
        return post;
    }

    static getAll(){
        return posts;
    }

    static getById(id){
        const post=posts.find(p=>p.id==id);
        return post;
    }

    static getByUserID(userID){
        const post=posts.filter((p)=>p.userID==userID);
        return post;
    }

    static update(postID,userID,post){
        //this is to make sure that the user can update only that post that he/she has posted.
        const p=posts.find(p=>p.id==postID&&p.userID==userID);
        if(!p){
            throw new ApplicationError("Post not found to update",404);
        }else{
            post.id=p.id;
            const postIndex=posts.findIndex(p=>p.id==postID&&p.userID==userID);
            posts[postIndex]=post;
            return post;
        }
    }
    static delete(postID,userID){
        //only user who has added the post will be able to delete that post.
        const postIndex=posts.findIndex(i=>i.id==postID&&i.userID==userID);
        if(postIndex==-1){
            throw new ApplicationError("Post not found to delete",404)
        }else{
            posts.splice(postIndex,1)
        }
    }

    static filterPosts(caption){
    
        const filtered= posts.filter((post)=>{
            return (post.caption==caption);
        })
    
        return filtered;
        
    }

    static save(postID,userID){
        const post=posts.find(p=>p.id==postID);
        
        if(!post){
            throw new ApplicationError("Post to be saved not exists",400);
        }else{
            const saved={};
            saved.post=post;
            saved.userWhoSavedID=userID;//who is saving that post
            savedPosts.push(saved);
        }
        
        
    }

    static getSaved(userID){
        //we will only return posts that were saved by that user only.
        const post=savedPosts.filter((p)=>p.userID==userID);
        return post;
    }
}


let posts=[];

let savedPosts=[];
