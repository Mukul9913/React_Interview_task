import express from "express";
import { addCategory, getAllCategory } from "../controller/categoryController.js";
const router=express.Router();
router.post("/add",addCategory)
router.get("/getall",getAllCategory)

export default router;