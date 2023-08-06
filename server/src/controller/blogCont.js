const blogModel=require('../models/blogModel.js');

const createBlog=async function(req,res){
    try{
        let {title,topic,subject,tag,body}=req.body;
        if(!title || !topic || !subject || !tag || !body) return res.status(400).send({status:false,msg:"Mandatory fields are required"});
        const blog={title:title.trim(),topic:topic.trim(),subject:subject.trim(),body:body.trim()};
        tag=tag.split(",");
        for(let i=0;i<tag.length;i++){
            tag[i]=tag[i].trim();
        }
        blog.tag=tag;
        console.log(blog);
        blog.authorId=req.token.userId;
        blog.publishedAt=new Date().toLocaleString();
        await blogModel.create(blog);
        return res.status(201).send({status:true,msg:"Blog posted successfully!"})
    }
    catch(err){
        return res.status(500).send({status:false,msg:err.message});
    }
}


module.exports={createBlog}