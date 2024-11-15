import UserModel from "../models/User.js"

export const isAdmin =async(req,res,next)=>{
    try {
    const {email}=req.body;  
    const userinfo =await UserModel.findOne({email});
    
    if(userinfo && userinfo.role=="Admin")
    {
        next();
    }
    else{
        res.status(404).json({
            message:"Access denied , only admin can access this"
        })
    }


    } catch (error) {
        res.status(500).json({
            message:"error occured"
        })
    }
}

