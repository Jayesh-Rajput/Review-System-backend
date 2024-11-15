import mongoose from "mongoose";

const dbConnect= async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("mongodb connect successfully");
    } catch (error) {
        console.log("connection  disadbled",error);
    }
}

export default dbConnect;