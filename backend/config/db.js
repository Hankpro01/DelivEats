import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://shashankknuf:hankoak@cluster0.mynyywa.mongodb.net/DelivEats').then(()=>console.log("DB Connected"))
}


