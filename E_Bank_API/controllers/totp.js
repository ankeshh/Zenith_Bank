const handleTotp=(req,res,db,transporter,speakeasy)=>{
    const {id}=req.params;
    const secret=speakeasy.generateSecret({length:20});

    db.transaction(trx=>{
        trx.select('*').from('otp').where("owner_id","=",id)
        .then(response=>{
            if(!response[0]){
                trx('otp')
                .insert({
                    owner_id:id,
                    secret:secret.base32
                })
                .catch(err=>res.json(err))   
            }
            else{
                trx('otp')
                .where("owner_id","=",id)
                .update({
                    secret:secret.base32
                })
                .catch(err=>res.json(err))
            }
        })
        .then(()=>{
            trx.select('*').from('users').where("id","=",id)
            .then(response1=>{
                let emailID=response1[0].email;
                const otp=speakeasy.totp({
                    secret: secret.base32,
                    encoding:"base32"
                })
                const remaining=(30-Math.floor((new Date().getTime())/1000.0 % 30));
                const message=`
                    <h1>Greetings from Zenith Bank</h2>
                    <p>Your otp for signin is <strong>${otp}</strong></p>
                `
                const options={
                    from: "'Zenith Bank' <zenithbankofficial12@gmail.com>", 
                    to: emailID, 
                    subject: "One time password", 
                    html: message
                }
                transporter.sendMail(options,(err,info)=>{
                    if(err){
                        res.json(err)
                    }
                    else{
                        res.json(info.response);
                    }
                })
                res.json(otp);
            })
            .catch(err=>{
                res.json(err)
            })
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
}

const verifyTotp=(req,res,db,speakeasy)=>{
    const {id}=req.params;
    const {otp}=req.body;

    db.select('secret').from('otp').where("owner_id","=",id)
        .then(response=>{
            const valid=speakeasy.totp.verify({
                secret:response[0].secret,
                encoding:"base32",
                token:otp,
                window:1
            })
            res.json(valid);
        })
}

module.exports={
    handleTotp,verifyTotp
}