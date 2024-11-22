import express from "express";
import { addQuestion } from "../controller/questionController.js";
const router=express.Router();
router.post("/create",addQuestion)
export default router;