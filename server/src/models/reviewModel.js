const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const reviewSchema = new mongoose.Schema({
    blogId: {
        type: ObjectId,
        ref: "Blog",
        required: true
    },
    like: {
        type: Number,
    },
    comments: [
        {
            authorId:{
                type:ObjectId,
                ref:"Author"
            },
            comment:{
                type:String
            }
        }
    ]
})

module.exports=mongoose.model("Review",reviewSchema);