import mongoose from "mongoose";

const questionSchema=new mongoose.Schema({
    question:String,
    options:[String],
    answer:String,
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
    }

})

export const Question=mongoose.model("Question",questionSchema);