const express=require('express');
const knex=require('knex');
const bcrypt=require('bcrypt');
const cors=require('cors');
const luxon=require('luxon');
const speakeasy=require('speakeasy');
const nodemailer=require('nodemailer');

const app=express();

const register=require('./controllers/register');
const signin=require('./controllers/signin');
const card=require('./controllers/card');
const transaction=require('./controllers/transaction');
const transactionhistory=require('./controllers/transactionHistory');
const totp=require('./controllers/totp');
const getbalance=require('./controllers/getbalance');
const account=require('./controllers/account');
const addaccount=require('./controllers/addaccount');
const beneficiary=require('./controllers/beneficiary');
const thirdFactor=require('./controllers/thirdFactor');
const message=require('./controllers/message');
const settings=require('./controllers/settings');
const billing=require('./controllers/billing');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
const port= process.env.PORT || 3000;
const saltRounds=Math.floor(Math.random()*10);

const db=knex({
    client:'pg',
    connection:{
        host:'127.0.0.1',
        user:'YOUR_USERNAME',
        password:'YOUR_PASSWORD',
        database:'YOUR_DATABASE_NAME'
    }
});
const transporter = nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user: 'YOUR_GMAIL_USERNAME',
        pass: 'YOUR_PASSWORD'
    },
    tls:{
        rejectUnauthorized:false
    }
});


app.get('/',(req,res)=>{
    res.send(`Our server is running on port ${port}`)
});

app.get('/',(req,res)=>{res.send(`Our server is running on port ${port}`)});
app.post('/register',(req,res)=>{register.handleRegister(req,res,db,bcrypt,saltRounds)});
app.post('/signin', (req,res) => {signin.handleSignin(req,res,db,bcrypt)});
app.get('/otp/:id',(req,res)=>{totp.handleTotp(req,res,db,transporter,speakeasy)});
app.post('/thirdFactorRegistration/:id',(req,res)=>{thirdFactor.thirdFactorRegistration(req,res,db,bcrypt,saltRounds,transporter)});
app.post('/thirdFactorSignin/:id',(req,res)=>{thirdFactor.thirdFactorSignin(req,res,db,bcrypt)});
app.get('/fetchQuestionID/:id',(req,res)=>{thirdFactor.fetchQuestionID(req,res,db)});
app.post('/verifyOtp/:id',(req,res)=>{totp.verifyTotp(req,res,db,speakeasy)});
app.post('/genCard/:id',(req,res)=>{card.genCard(req,res,db)});
app.get('/getCard/:id',(req,res)=>{card.getCard(req,res,db)});
app.get('/getAcc/:id',(req,res)=>{card.getAcc(req,res,db)});
app.post('/transaction', (req,res) => {transaction.handleTransaction(req,res,db)});
app.get('/transactionhistory/:id', (req,res) => {transactionhistory.handleTransactionHistory(req,res,db)});
app.get('/getbalance/:id',(req,res)=> {getbalance.handleGetBalance(req,res,db)});
app.get('/getaccount/:id',(req,res)=> {account.handleAccountInfo(req,res,db)});
app.post('/addaccount',(req,res)=> {addaccount.handleAddAccount(req,res,db)});
app.get('/accounthistory/:acc',(req,res) => {account.handleAccountHistory(req,res,db)});
app.get('/beneficiarylist/:id',(req,res)=>{beneficiary.handleBeneficiaryInfo(req,res,db)});
app.post('/beneficiary/add',(req,res)=>{beneficiary.handleAddBeneficiary(req,res,db)});
app.get('/beneficiary/remove/:benef_acc_no',(req,res)=>{beneficiary.handleRemoveBeneficiary(req,res,db)});
app.post('/beneficiary/request',(req,res)=>{beneficiary.handleSendReqBeneficiary(req,res,db)});
app.get('/requestlist/:id',(req,res)=>{beneficiary.handleGetRequest(req,res,db)});
app.get('/closeaccount/:acc_num',(req,res)=>{account.handleCloseAccount(req,res,db)});
app.get('/totalbalance/:id',(req,res)=> {account.handleTotalBalance(req,res,db)});
app.get('/message/:id',(req,res)=> {message.handleGetMessage(req,res,db)});
app.get('/deletemessage/:msg_id',(req,res)=> {message.handleDeleteMessage(req,res,db)});
app.get('/messagecount/:user_id',(req,res)=> {message.handleMessageCount(req,res,db)});
app.get('/userDetails/:id',(req,res)=>{settings.getUserDetails(req,res,db)});
app.post('/updateUser/:id',(req,res)=>{settings.updateUser(req,res,db)});
app.post('/checkPassword/:id',(req,res)=>{settings.checkPassword(req,res,db,bcrypt)});
app.post('/updatePassword/:id',(req,res)=>{settings.updatePassword(req,res,db,bcrypt,saltRounds)});
app.get('/billinginfo/:owner_id',(req,res)=>{billing.handleBillInfo(req,res,db)});
app.post('/addbill',(req,res)=>{billing.handleCreateBill(req,res,db)});
app.get('/deletebill/:id',(req,res)=>{billing.handleDeleteBill(req,res,db)});
app.get('/checkdue/:id',(req,res)=>{billing.handleCheckDues(req,res,db)});

app.listen(port,()=>{
    console.log(`Sever running`);
})

