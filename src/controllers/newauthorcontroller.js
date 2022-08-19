const Author=require("../New Schema/newauthors")

const createNewAuthor=async function(req,res){
    const data=req.body
    const newAuthor=await Author.create(data)
    res.send({newAuthor:newAuthor})
}

module.exports={createNewAuthor}