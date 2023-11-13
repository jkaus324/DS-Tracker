import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User"
    },
    question: {
        type: String,
        required: true
    }
});

export const Question = mongoose.model("Question",questionSchema);

