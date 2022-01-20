const thirdFactorRegistration=(req,res,db,bcrypt,saltRounds,transporter)=>{
    const {id}=req.params;
    const {robots,robotNames,questionID,answer}=req.body;
    robots.forEach((r,i)=>{
        global['robHash'+(i+1)]=bcrypt.hashSync(r.toString(),saltRounds);
        global['robID'+(i+1)]=r;
    });
    robotNames.forEach((r,i)=>{
        global['robName'+(i+1)]=r;
    })

    db.transaction(trx=>{
        trx('third_factor_auth')
        .insert({
            owner_id:id,
            rob1:robHash1,
            rob2:robHash2,
            rob3:robHash3,
            rob4:robHash4,
            rob5:robHash5,
            question_id:questionID,
            answer:bcrypt.hashSync(answer,saltRounds)
        })
        .then(()=>res.json(true))
        .catch(err=>{
            res.status(400).json('Error in insertion')
        })
        .then(()=>{
            trx.select('*').from('users').where('id','=',id)
                .then(response=>{
                    let mailID=response[0].email;
                    const message=`
                        <h1>Greetings from Zenith Bank</h2>
                        <p>You have registered using these three robots, kindly remember this information for using our services</p>
                        <img src=https://robohash.org/${robID1}?100x100 /><p>${robName1}</p>
                        <img src=https://robohash.org/${robID2}?100x100 /><p>${robName2}</p>
                        <img src=https://robohash.org/${robID3}?100x100 /><p>${robName3}</p>
                        <img src=https://robohash.org/${robID4}?100x100 /><p>${robName4}</p>
                        <img src=https://robohash.org/${robID5}?100x100 /> <p>${robName5}</p>
                    `
                    const options={
                        from: "'Zenith Bank' <zenithbankofficial12@gmail.com>", 
                        to: mailID, 
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
                })
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })

}

const thirdFactorSignin=(req,res,db,bcrypt)=>{
    const {id}=req.params;
    const {robots,answer}=req.body;
    let count=0;
    let answerValid=false;
    db.select('rob1','rob2','rob3','rob4','rob5').from('third_factor_auth').where('owner_id','=',id)
        .then(data=>{      
            robots.forEach(r=>{
                for(const [key,value] of Object.entries(data[0])){
                    if(bcrypt.compareSync(r.toString(),value)){
                        count++;
                    }
                }
            })
        })
        .then(()=>{
            db.select('answer').from('third_factor_auth').where('owner_id','=',id)
                .then(data=>{
                    if(bcrypt.compareSync(answer,data[0].answer)){
                        answerValid=true;
                    }

                    if(count===3 && answerValid===true){
                        res.json(true);
                    }
                    else{
                        res.json(false);
                    }
            })
        })
        .catch(err=>{
            res.json('robots not validated');
        })

}

const fetchQuestionID=(req,res,db)=>{
    const {id}=req.params;
    db.select('question_id').from('third_factor_auth').where('owner_id','=',id)
        .then(data=>{
            res.json(data[0].question_id)
        })
        .catch(err=>{
            res.json('Question could not be fetched');
        })
}

module.exports={
    thirdFactorRegistration,
    thirdFactorSignin,
    fetchQuestionID
}