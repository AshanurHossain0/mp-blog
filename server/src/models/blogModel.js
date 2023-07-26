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
    Subject: {
        type:String,
        required:true
    },
    Topic: {
        type:String,
        required:true
    },
    isDeleted: {
        type:Boolean,
        default: false
    },
    publishedAt:{
        type:Date
    }

});

module.exports=mongoose.model("Blog",blogSchema)