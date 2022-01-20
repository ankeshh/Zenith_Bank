const handleGetBalance = (req,res,db) => {
    const {id} = req.params;
    db.select('balance').from('acc_balance').where('acc_owner','=',id).then(bal => {
        res.json(bal[0].balance);
    }).catch(err => {return res.status(400).json('Unable to get user balance');})
}

module.exports = {
    handleGetBalance
}