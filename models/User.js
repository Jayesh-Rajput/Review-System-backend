import mongoose from "mongoose";


const userSchema =new mongoose.Schema({
    name:{
        type :String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true

    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        enum:['Admin','Alumini','student'],
        require:true
    }
})

const userModel=mongoose.model("User",userSchema)

export default userModel;