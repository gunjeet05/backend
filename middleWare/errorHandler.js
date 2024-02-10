//whenever server return something We get response into html but if we want to convert it into some other 
//format we will use custom middleware
const {constants}=require("../constant")
const errorHandler=(err, req, res, next)=>{
    const statusCode=res.statusCode? res.statusCode : 500;
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json(
                {   
                    title:"Validation Error", 
                    message:err.message, 
                    stackTree:err.stack
                }
            )
            break;

        case constants.NOT_FOUND:
            res.json(
                    {   
                    title:"NOT_FOUND", 
                    message:err.message, 
                    stackTree:err.stack
                    }
                )
            break;
        case constants.UNAUTHORIZED:
            
            res.json(
                {   
                    title:"UNAUTHORIZED", 
                    message:err.message, 
                    stackTree:err.stack
                }
            )
        case FORBIDDEN:
            
            res.json(
                {   
                    title:"forbidden", 
                    message:err.message, 
                    stackTree:err.stack
                }
            )
        default:
            console.log("No error")
                  
               
            
                }
}
module.exports=errorHandler;