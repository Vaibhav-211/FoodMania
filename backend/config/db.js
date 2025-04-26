import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://sajalbunkar:Vaibhav_123@cluster0.05wzz.mongodb.net/FoodMania').then(()=>console.log("Connected to DB"))
}