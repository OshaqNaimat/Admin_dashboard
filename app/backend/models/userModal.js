import mongoose from "mongoose";

const userSchema = mongoose.Schema( {
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    role: {
        type: Boolean,
        required: true
    },
    comments: {
        type: String,
        required: false,
        default: null
    },
}, {
    timestamps: true
} )




export const User = mongoose.models.user || mongoose.model( 'user', userSchema )