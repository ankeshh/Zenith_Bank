const handleAddAccount=(req,res,db)=>{
    const {id, type, limit, label, accNo}=req.body;
    if(!type){
        return res.status(400).json('Wrong Form Submission');
    }
    
    db('acc_balance')
        .insert({
            acc_no: accNo,
            balance: 500,
            acc_owner: parseInt(id),
            acc_type: type,
            acc_limit: limit,
            acc_label: label
        })
        .returning('*')
        .then(
            db('message')
            .insert({
                user_id: parseInt(id),
                description: `A new account #${accNo} was added`
            })
            .catch(err=>console.log(err))
        )
        .then(account => res.json(account))
        .catch(err=>res.json(err.message));
}


module.exports={
    handleAddAccount
}