const getUserDetails=(req,res,db)=>{
    const {id}=req.params;
    db.select('username','name','email','dob','phno','aadhar','gender').from('users').where('id','=',id)
        .then(data=>{
            res.json(data[0]);
        })
        .catch(err=>{
            res.status(400).json('Couldnt fetch user details');
        })
}

const updateUser=(req,res,db)=>{
    const {id}=req.params;
    var flag = false;
    for(const [key,value] of Object.entries(req.body)){
        if(value!=""){
            db('users').where('id','=',id)
            .update({
                [key]:value
            })
            .then(flag = true)
            .catch(err=>res.json(err.message))
        }
    }
    res.json(flag)
}

const checkPassword=(req,res,db,bcrypt)=>{
    const {id}=req.params;
    const {password}=req.body;
    db.select('password').from('users').where('id','=',id)
        .then(data=>{
            if(bcrypt.compareSync(password,data[0].password)){
                res.json(true);
            }
            else{
                res.json(false);
            }
        })
        .catch(err=>{
            res.status(400).json(err);
        })

}

const updatePassword=(req,res,db,bcrypt,saltRounds)=>{
    const {id}=req.params;
    const {password}=req.body;
    db('users').where('id','=',id)
        .update({
            password: bcrypt.hashSync(password,saltRounds)
        })
        .then(()=>{
            res.json(true);
        })
        .catch(err=>{
            res.status(400).json(err.message);
        })
}


module.exports={
    getUserDetails,updateUser,
    checkPassword, updatePassword,
}