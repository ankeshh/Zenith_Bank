const { DateTime } = require("luxon");

const genCard=(req,res,db)=>{
    const {id} =req.params;
    const {accNo,cardType}=req.body;
    db.select('*').from('card_info').where("acc_no","=",accNo).andWhere("card_type","=",cardType)
        .then(data1=>{
            if(!data1[0]){
                db.select(['name','created_date']).from('users').where("id","=",id)
                .then(data2=>{
                    const createdDate=DateTime.fromJSDate(data2[0].created_date);
                    db('card_info')
                    .insert({
                        card_number:Math.floor(Math.random()*1E16),
                        owner_id:id,
                        expiration_date: createdDate.plus({years:4}),
                        cvv:Math.floor(Math.random()*1E3),
                        card_type:cardType,
                        acc_no:accNo
                    })
                    .then(()=>{
                        res.json(true);
                    })
                    .catch(err=>res.json(err.message))
                })
                .catch(err=>res.json(err.message));
            }
            else{
                res.json(false);
            }
        })
        .catch(err=>res.json(err.message));
}

const getCard=(req,res,db)=>{
    const {id}=req.params;
    db.select(['users.name','card_info.*'])
        .from('users')
        .innerJoin('card_info','users.id','card_info.owner_id')
        .where('users.id','=',id)
        .then(data3=>{
            res.json(data3);
        })
        .catch(err=>res.json(err.message))
}

const getAcc=(req,res,db)=>{
    const {id}=req.params;
    db.select('acc_no').from('acc_balance').where('acc_owner','=',id)
        .then(data=>{
            res.json(data);
        })
}

module.exports={
    genCard, getAcc, getCard
}