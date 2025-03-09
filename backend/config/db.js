import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://vidyabhandari2804:K82I07dqbWqcz31l@cluster0.0fivq.mongodb.net/home-feels').then(()=>console.log("DB Connected"))
}

