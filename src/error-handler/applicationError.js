//this is the class we are going to now throw errors

export default class ApplicationError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
    }
}