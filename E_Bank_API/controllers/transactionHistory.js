const handleTransactionHistory = (req,res,db) => {
    const {id} = req.params;
    db.select('from_acc','to_acc','amount','date','balance').from('tranlog').where('id','=',id)
    .then(log => {
        res.json(log);
    }).catch(err => {return res.status(400).json('Unable to get transaction history');})
}

module.exports = {
    handleTransactionHistory
}