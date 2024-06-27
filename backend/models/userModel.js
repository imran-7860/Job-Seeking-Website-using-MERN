import mongoose from "mongoose";
import validator from "validator";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    name: { type: String, require: [true, 'Plese provide your name!'], minLength: [3, "Name must contain 3 characters!"], maxLength: [20, "Name cannot exceed 20 characters!"] },
    email: { type: String, require: [true, 'Plese provide your email!'], validate: [validator.isEmail, "Please provide a valid email!"] },
    phone: { type: Number, require: [true, 'Plese provide your phone!'] },
    password: { type: String, require: [true, 'Plese provide your password!'], minLength: [6, "password must contain 6 characters!"], maxLength: [10, "Name cannot exceed 10 characters!"] },
    role: { type: String, require: [true, 'Plese provide your role!'], enum: ["Job seeker", "Employer"] },
    createdAt : {type : Date , default : Date.now},

},{timestamps: true})


// hashing password
userSchema.pre("save", async function(next){
 if(!this.isModified("password")){
    next();
 }
 this.password = await bcrypt.hash(this.password , 10)
})

// comparing password 
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword , this.password)
}