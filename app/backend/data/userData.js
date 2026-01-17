import { connectDB } from "../connect"
import { User } from "../models/userModal"

connectDB()
export const getData = async()=>{
    let allData = await User.find({})
    return allData  
}