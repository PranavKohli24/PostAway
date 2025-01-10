export default class UserModel{

    constructor(name,email,password,id){
        this.name=name;
        this.email=email;
        this.password=password;
        this.id=id;
    }

    static signUp(name,email,password){
        const newUser=new UserModel(name,email,password);
        newUser.id=users.length+1;
        users.push(newUser);
        return newUser;
    }

    static signIn(email,password){
        const user=users.find(u=>u.email==email && u.password==password);
        return user;
    }
}


let users=[{
    "id":1,
    "name":"akaay",
    "email":"akkay@gmail.com",
    "password":"Password1",
},{
    "id":2,
    "name":"vamika",
    "email":"vamika@gmail.com",
    "password":"Password2",
}]