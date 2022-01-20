const handleTransaction = (req,res,db) => {
    const {sender_acc, receiver_acc, amount, transfer_fee} = req.body;
    if(!sender_acc || !receiver_acc || !amount || sender_acc === receiver_acc)
        return res.status(400).json('Check your details and try again');
    db.select('acc_no','balance','acc_owner').from('acc_balance').where('acc_no','=',sender_acc).then(data => {
        if(parseInt(data[0].balance)>=parseInt(amount)){
            const remainBalance = parseInt(data[0].balance)-parseInt(amount)-parseInt(transfer_fee);
            const acc_sender_id = data[0].acc_owner; 
            db('acc_balance').update('balance', remainBalance).where('acc_no','=',sender_acc).then(
                db('tranlog').insert({
                    id: acc_sender_id,
                    from_acc: sender_acc,
                    to_acc: receiver_acc,
                    amount: amount,
                    balance: remainBalance
                }).returning('*').then(
                    db.select('acc_no','balance','acc_owner').from('acc_balance').where('acc_no','=',receiver_acc).then(data =>{
                        const newBalance = parseInt(amount) + parseInt(data[0].balance);
                        const acc_receiver_id = data[0].acc_owner;
                        db('acc_balance').update('balance',newBalance).where('acc_no','=',receiver_acc).then(
                            db('tranlog').insert({
                                id: acc_receiver_id,
                                from_acc: sender_acc,
                                to_acc: receiver_acc,
                                amount: amount,
                                balance: newBalance
                            }).then(
                                db('message')
                                .insert({
                                    user_id: acc_receiver_id,
                                    description: `Amount of ${amount} was received from ${sender_acc}`
                                })
                                .then(
                                    db('message')
                                    .insert({
                                        user_id: acc_sender_id,
                                        description: `Amount of ${amount} was transfered to ${receiver_acc}`
                                    }).catch(err => console.log(err))
                                )
                            )
                        )
                        .then(res.json("Amount transfered"))
                        .catch(err => {res.status(400).json('Unable to update at receivers end')});
                    }).catch(err => {return res.status(400).json('Check your details and try again')})
                )
            );
        }
        else
            return res.json('Insufficient balance');
    }).catch(err => {return res.status(400).json('Unable to transfer. Try again later');});

    
}

module.exports = {
    handleTransaction
};