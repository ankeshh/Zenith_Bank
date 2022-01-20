const handleBillInfo = (req,res,db) => {
    const {owner_id} = req.params;
    db.select('id','title','amount','due_date').from('billing_service').where('owner_id','=',owner_id)
    .then(info => {
        res.json(info);
    }).catch(err => {return res.status(400).json('Unable to get bill');})
}


const handleDeleteBill = (req,res,db) => {
    const {id} = req.params;
    db('billing_service').where('id','=',id).del().returning('*')
    
    .then(res.json('Bill deleted'))
    .catch(err=>res.json(err.message));
}

const handleCreateBill = (req,res,db) => {
    const {id, owner_id, title, amount,due_date} = req.body;
    db('billing_service').insert({
        id: id,
        owner_id: owner_id,
        title: title,
        amount: amount,
        due_date: due_date
    }).returning('*')
    .then(res.json('Bill created'))
    .catch(err => res.json(err.message));
}

const handleCheckDues = (req,res,db) => {
    const{id} = req.params;
    const date = new Date();
    db.select('*').from('billing_service').where('owner_id','=',id).andWhere('due_date','=',date)
    .then(data => {
        res.json(data);
    })
    .catch(err=>res.json(err.message))
}

module.exports = {
    handleBillInfo,
    handleCreateBill,
    handleDeleteBill,
    handleCheckDues
}