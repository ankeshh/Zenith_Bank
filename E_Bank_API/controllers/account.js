const handleAccountInfo = (req,res,db) => {
    const {id} = req.params;
    db.select('acc_no','balance','acc_type','acc_label','acc_limit').from('acc_balance').where('acc_owner','=',id).then(info => {
        res.json(info);
    }).catch(err => {return res.status(400).json('Unable to get user account');})
}

const handleAccountHistory = (req,res,db) => {
    const {acc} = req.params;
    db.select('from_acc','to_acc','amount','date','balance').from('tranlog').where('from_acc','=',acc).orWhere('to_acc','=',acc).then(log => {
        res.json(log);
    }).catch(err => {return res.status(400).json('Unable to get transaction history');})

}

const handleCloseAccount = (req,res,db) => {
    const {acc_num} = req.params;
    db('acc_balance').where('acc_no','=',acc_num).del().returning('*')
    
    .then(accounts => res.json(accounts))
    .catch(err=>res.json(err.message));
}

const handleTotalBalance = (req,res,db) => {
    const {id} = req.params;
    db('acc_balance').sum('balance').where('acc_owner','=',id)
    .then(balance => res.json(balance[0].sum))
    .catch(err => res.json(err.message));
}

module.exports = {
    handleAccountInfo,
    handleAccountHistory,
    handleCloseAccount,
    handleTotalBalance
}