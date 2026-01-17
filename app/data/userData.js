connectDB()
export const getData = async()=>{
    let allData = await User.find({})
    return allData
}