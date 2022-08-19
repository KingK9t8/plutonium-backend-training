const Publisher=require("../New Schema/newpublishers")

const createNewPublisher=async function(req,res){
    const data=req.body
    const newPublisher=await Publisher.create(data)
    res.send({newPublisher:newPublisher})
}

module.exports={createNewPublisher}