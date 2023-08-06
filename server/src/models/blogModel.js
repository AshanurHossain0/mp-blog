const mongoose=require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId;

const blogSchema=new mongoose.Schema({

    title: {
        type:String,
        required:true
    },
    body: {
        type:String,
        required:true
    },
    authorId: {
        type:ObjectId,
        ref:"Author",
        required:true
    },
    tags:{
        type:[String]
    },
    subject: {
        type:String,
        required:true
    },
    topic: {
        type:String,
        required:true
    },
    isDeleted: {
        type:Boolean,
        default: false
    },
    publishedAt:{
        type:String
    }

});

module.exports=mongoose.model("Blog",blogSchema)