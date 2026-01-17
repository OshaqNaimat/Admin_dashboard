"use server"

import { redirect } from "next/navigation"
import { User } from "../models/userModel"
import { revalidatePath } from "next/cache"



export const addData = async ( formData ) => {
    const { username, email, password, phone, status, role, comments } = Object.fromEntries( formData )

    const newUser = await User.create( {
        username, email, password, phone, status, role, comments
    } )


    redirect( '/dashboard/users/show-user' )


}

export const deleteData = async ( formData ) => {
    let id = formData.get( 'id' )
    let deleteUser = await User.findByIdAndDelete( id )
    revalidatePath( '/dashboard/users/show-user' )
}