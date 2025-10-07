import mongoose from 'mongoose'
export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB connected successfully!")
    }
    catch(err){
        console.log("Error connecting to MongoDB", err)
        process.exit(1) //exit with failure 
    }
}