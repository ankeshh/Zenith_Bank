const handleRegister=(req,res,db,bcrypt,saltRounds)=>{
    const {name,phno,dob,email,username,password,aadharCard,gender}=req.body;
    if(!name || !email|| !phno || !dob || !username || !password || !aadharCard || !gender){
        return res.status(400).json('Wrong Form Submission');
    }
    const hash=bcrypt.hashSync(password,saltRounds);
    const accNo=Math.floor(2E9+Math.random()*1E9);
    const dateCreated=new Date().toJSON().slice(0,10);

    db('users')
        .insert({
            username:username,
            name:name,
            email:email,
            password:hash,
            dob:dob,
            phno:phno,
            aadhar:aadharCard,
            acc_no:accNo,
            created_date:dateCreated,
            gender:gender
        })
        .returning('*')
        .then(users=>{
            db('acc_balance').insert({
                acc_no: users[0].acc_no,
                acc_owner: users[0].id,
                balance: 500,
                acc_type: 'Spending',
                acc_label:  'Default account',
                acc_limit: 50
            }).then(res.json(users[0]));
        })
        .catch(err=>res.json(err.message));
}


module.exports={
    handleRegister:handleRegister
}