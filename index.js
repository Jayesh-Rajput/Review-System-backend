import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dbConnect from "./config/database.js";
import User from "./models/User.js";
import router from "./routes/Feedbackroute.js";



const app = express();


const PORT = 3000;
app.use(express.json())
app.use("/api/v1",router)
dotenv.config();

dbConnect()





app.listen(PORT, () => {
    console.log(`Server is running at port:${PORT}`)
})