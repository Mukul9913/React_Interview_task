import express from "express"
import dontenv from "dotenv"
import dbConnection from "./database/dbConnection.js";
import categoryRouter from "./routes/categoryRoute.js";
import questionRouter from "./routes/questionRoute.js";
const app=express();
dontenv.config({path:"./config/config.env"});
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/v1/category",categoryRouter);
app.use("/api/v1/question",questionRouter);

dbConnection();
export default app;