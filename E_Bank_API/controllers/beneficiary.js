const handleBeneficiaryInfo=(req,res,db)=>{
    const {id}=req.params;
    db.select('benef_name','benef_acc_no','benef_bank','transfer_fee').from('beneficiary').where('user_id','=',id).then(log => {
        res.json(log);
    }).catch(err => {return res.status(400).json('Unable to get beneficiary list');})
}

const handleSendReqBeneficiary=(req,res,db)=>{
    const {user_id, benef_name, benef_acc_no, user_name, benef_bank, transfer_fee} = req.body;
    db.select('*').from('acc_balance').where('acc_no','=',benef_acc_no)
    .then( data => {
        db('req_beneficiary').insert({
            req_id: parseInt(data[0].acc_owner),
            user_id: parseInt(user_id),
            user_name: user_name,
            benef_id: parseInt(data[0].acc_owner),
            benef_bank: benef_bank,
            benef_name: benef_name,
            transfer_fee: parseInt(transfer_fee),
            benef_acc_no: parseInt(benef_acc_no)
        })
        .returning('*')
        .then(respone => res.json('Request sent!'))
        .catch(err=>res.json('Error sending request, try again later.'))
    })
    .catch(err => console.log(err));
}

const handleGetRequest = (req,res,db) => {
    const {id}=req.params;
    db.select('user_id','benef_name','benef_acc_no','user_name').from('req_beneficiary').where('req_id','=',id).then(log => {
        res.json(log);
    }).catch(err => {return res.status(400).json('Unable to get request list');})
}

const handleAddBeneficiary=(req,res,db)=>{
    const {request_response, user_id, for_id} = req.body;
    if(request_response === 'true'){
        db.select('user_id','benef_id','benef_name','benef_acc_no','benef_bank','transfer_fee').from('req_beneficiary').where('req_id','=',user_id).andWhere('user_id','=',for_id)
        .then(data => 
            db('beneficiary').insert({
                user_id: data[0].user_id,
                benef_id: data[0].benef_id,
                benef_name: data[0].benef_name,
                benef_bank: data[0].benef_bank,
                benef_acc_no: data[0].benef_acc_no,
                transfer_fee: data[0].transfer_fee
            })
            .returning('*').then(
                db('req_beneficiary').where('req_id','=',data[0].benef_id).del()
                .catch(err => res.json('Failed to accept request'))
            ).then(res.json('Request accepted'))
        )
        .catch(err => res.json('Failed to accept request'));
    }
    else{
        db('req_beneficiary').where('req_id','=',user_id).andWhere('user_id','=',for_id).del()
        .then(res.json('Request denied'))
        .catch(err => res.json('Failed to handle beneficiary request'));
    }
}

const handleRemoveBeneficiary=(req,res,db)=>{
    const{benef_acc_no}=req.params;
    db('beneficiary').where('benef_acc_no','=',benef_acc_no).del()
    .then(res.json('deleted'))
    .catch(err=>res.json(err.message));
}


module.exports={
    handleBeneficiaryInfo,
    handleAddBeneficiary,
    handleRemoveBeneficiary,
    handleSendReqBeneficiary,
    handleGetRequest
}