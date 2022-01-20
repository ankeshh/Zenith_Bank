const handleGetMessage=(req,res,db)=>{
    const {id}=req.params;
    db.select('msg_id','description','date').from('message').where('user_id','=',id)
    .then(messages => {
        res.json(messages);
    }).catch(err => {return res.status(400).json('Unable to get messages');})

}

const handleDeleteMessage=(req,res,db)=>{
    const {msg_id}=req.params;
    db('message').where('msg_id','=',msg_id).del()
    .then(res.json('deleted'))
    .catch(err=>res.json(err.message));
}

const handleMessageCount=(req,res,db)=>{
    const {user_id}=req.params;
    db('message').count('*').where('user_id','=',user_id)
    .then(count => res.json(count[0].count))
    .catch(err=>console.log(err));
}

module.exports={
    handleGetMessage,
    handleDeleteMessage,
    handleMessageCount
    
}