const Match=require("../model/Match");

exports.post=(req,res)=>{
    // if(!req.body.content){
    //     return res.status(400).send({message:"Note:content can not be empty"});
    // }
console.log(req.body);
    const match=new Match(req.body)
    match.save()
    // console.log(match)
.then(data => {
    res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating the Note."
    });
});
};

exports.get=(req, res)=>{

}






module.exports=exports;