import { Question } from "../model/questionSchema.js";
import { Category } from "../model/categorySchema.js";
import { catchAsyncError } from "../middleware/catchAsyncError.js";
import ErrorHandle from "../middleware/error.js";
export const addQuestion=catchAsyncError(async(req,res,next)=>{
    const {question,options,answer,category}=req.body;
    const categoryData=await Category.findById(category);
    if(!categoryData){
        return next(new ErrorHandle("Category Not Found",404))
    }
    const questionData=await Question.create({
        question,
        options,
        answer,
        category,
    })
    res.status(201).json({
        success:true,
        message:"Question Added Successfully",
        questionData,
    })
})

export const getAllQuestion=catchAsyncError(async(req,res,next)=>{
    const questions=await Question.find().populate("category");
    res.status(200).json({
        success:true,
        questions,
    })
})