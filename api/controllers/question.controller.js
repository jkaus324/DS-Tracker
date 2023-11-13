import { Question } from "../models/question.model";
import User from "../models/user.model";

export const addQuestion = async (req,res) => {
    const {userId,question} = req.body;

    try {
        const user = await User.findOne({_id:userId});

        if(user) {
            const ques = await Question.findOne({userId:userId,question:question});
            if(ques) {
                res.json({success:false,message:"Can't add same Question twice"});
            } else {
                await Question.create({userId:userId,question:question});
                res.json({success:true,message:"Question successfully added in your database"});
            }
        } else {
            res.json({success:false,message:"Incorrect User"});
        }
    } catch (err) {
        console.log(err);
        res.json({success:false,message:"Something went wrong!!",error:err.message});
    }
}

export const getQuestion = async (req,res) => {
    const userId = req.userId;

    try {
        const resQues = await Question.find({userId:userId});
        res.json({success:true,message:"All question",resQues});
    } catch (err) {
        console.log(err);
        res.json({success:false,message:"Something went wrong!!",error:err.message});
    }
}