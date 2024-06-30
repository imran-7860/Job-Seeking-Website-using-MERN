
import { User } from "../models/userSchema.js";


export const register = async (req, res) => {
    const { name, email, phone, password, role } = req.body;
    if (!name || !email || !phone || !password || !role) {
      return res.status(400).send({status:false , message:"Please fill full form!"});       
    }
    const isEmail = await User.findOne({ email });
    if (isEmail) {
      return res.status(400).send({status:false ,message:"Email already registered!"});
    }
    const user = await User.create(req.body);
    return res.status(201).send({status:true , message:"sucessfully register " , data : user})
  }





  export const login = async (req, res) => {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).send({ status: false, message: "Please provide email, password, and role." });
    }
    const user = await User.findOne({ email }); 
    if (!user) {
      return res.status(400).send({ status: false, message: "Invalid Email Or Password." });
    }  
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
      return res.status(400).send({ status: false, message: "Invalid Email Or Password." });
    }
    if (user.role !== role) {
      return res.status(404).send({ status: false, message: `User with provided email and ${role} not found!` });
    }
    return res.status(200).send({status:true , message:"sucessfully login " , data : user})
  };
  
  

  // export const logout = catchAsyncErrors(async (req, res, next) => {
  //   res
  //     .status(201)
  //     .cookie("token", "", {
  //       httpOnly: true,
  //       expires: new Date(Date.now()),
  //     })
  //     .json({
  //       success: true,
  //       message: "Logged Out Successfully.",
  //     });
  // });
  
  
  // export const getUser = catchAsyncErrors((req, res, next) => {
  //   const user = req.user;
  //   res.status(200).json({
  //     success: true,
  //     user,
  //   });
  // });