class ErrorHandle extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}
export const errorMiddleware=(err,req,res,next)=>{
    err.message=err.message || "Internal Server Error";
    err.statusCode=err.statusCode || 500;
    if(err.code===11000){
        err.message="Duplicate Key Error";
        err=new ErrorHandle(err.message,400);
    }
    const errorMessage=err.errors?Object.values(err.errors).map((value)=>value.message):err.message;
    console.log(errorMessage);
    res.status(err.statusCode).json({
        success:false,
        message:errorMessage
    })
}

export default ErrorHandle;