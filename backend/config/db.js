import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://fooddel2:Viru2002@cluster0.g7jdrsz.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
