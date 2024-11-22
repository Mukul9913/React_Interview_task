import { catchAsyncError } from "../middleware/catchAsyncError.js";
import { Category } from "../model/categorySchema.js";

export const addCategory=catchAsyncError(async(req,res,next)=>{
    const {categoryName}=req.body;
    console.log(categoryName);
    if(!categoryName){
        return next(new Error("Category Name is Required"))
    }
    const category=await Category.create({categoryName});
    res.status(201).json({
        success:true,
        category
    })
})

export const getAllCategory=catchAsyncError(async(req,res,next)=>{
    const category=await Category.find();
    res.status(200).json({
        success:true,
        category
    })
})