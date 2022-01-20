import React from "react";
import './Form.css';
import {Link} from 'react-router-dom';
class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state={
            signinUsername: "",
            signinPassword: "",
        };
    }

    onUsernameChange = (event) => {
        this.setState({signinUsername: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signinPassword: event.target.value})
    }

    onSubmitSignin = () => {
        fetch('http://localhost:3000/signin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: this.state.signinUsername,
                password: this.state.signinPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id){
                this.props.loadUsers(user);
                window.location.href = '/OTP';
            }
            else
                alert("Enter valid username/password");
        })
        .catch(err => console.log(err));
    }

    verify = () =>{
        if(!this.state.authorize)
            alert("Please verify before Sign In");
    }

    render(){
        return(
  
            <div className='container'>
            <div className='FormWrap'>
                <Link to="/" className='Icon'>Zenith Bank</Link>
                <div className='FormContent'>
                    <form className='form'>
                        <h1>Sign in to your account</h1>
                        <label>Username</label>
                        <input type="text" id="usr_name" required onChange={this.onUsernameChange}/> <br/>
                        <label>Password</label> 
                        <input type="password" id="usr_password" required onChange={this.onPasswordChange}/> <br/>
                        <a className='buttons' type="submit" value="Signin" onClick={this.onSubmitSignin} href="#0">Verify</a>
                        <label>New User? Create a new account</label>
                        <Link to="/register" className='buttons' type="submit" value="Register">Register</Link>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default Signin;