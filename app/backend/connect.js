import mongoose from "mongoose"

export const connectDB = async()=>{
        await mongoose.connect("mongodb+srv://oshaqnaimat15_db_user:dashboardAdmin@admindashboard.lzx5rts.mongodb.net/?appName=AdminDashboard")
        console.log(`Database connected on host:${mongoose.connection.host}`)
    }