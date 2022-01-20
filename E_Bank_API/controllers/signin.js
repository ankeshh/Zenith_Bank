const handleSignin = (req,res,db,bcrypt) => {
    const {username, password} = req.body;
    if(!username || !password)
        return res.status(400).json('Invalid form submission');
    db.select('username','password').from('users').where('username', '=',username).then(data => {
        const isValid = bcrypt.compareSync(password, data[0].password);
        if(isValid){
            db.select('*').from('users').where('username', '=', username).then(user => {
                res.json(user[0]);
            }).catch(err => res.status(400).json('Unable to get user'));
        }
        else
            res.status(400).json('Invalid username/password');
    }).catch(err => res.status(400).json('Unable to access user'));
}

module.exports = {
    handleSignin:handleSignin
};