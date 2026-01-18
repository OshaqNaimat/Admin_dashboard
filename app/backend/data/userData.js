import { connectDB } from "../connect"
import { User } from "../models/userModal"

connectDB()
export const getData = async(name)=>{
    let pattern = new RegExp(name,'i')
    let allData = await User.find({
     username : pattern
    })
    return allData  
}