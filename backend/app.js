import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cloudinary from 'cloudinary'
import userRoute from './routes/userRoute.js'
import applicationRoute from './routes/applicationRoute.js'
import jobRoute from './routes/jobRoute.js'
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import fileUpload from "express-fileupload";

const app = express();
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("mongoDB connected"))
  .catch((e) => console.log("Got error while starting server ", e));

app.use(cors());
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp",

}))
app.use("/api/user", userRoute);
app.use("/api/application", applicationRoute);
app.use("/api/job", jobRoute);




cloudinary.v2.config({
  cloud_name : process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET
})




app.listen(process.env.PORT || 8000, function () {
  console.log("Server is running on port" + (process.env.PORT || 8000));
});