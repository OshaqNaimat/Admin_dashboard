import { redirect } from "next/navigation"

export const addData  = async(formData)=>{
    const {username,email,password,phone,status,role,comments} = Object.fromEntries(formData)


    const newUser = await User.create({
        username,email,password,phone,status,role,comments
    })


    redirect('/dashboard/users')
}