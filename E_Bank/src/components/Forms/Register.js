import React from 'react'; 
import './Form.css';
class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            phno:"",
            dob:"",
            email:"",
            username:"",
            password:"",
            confirmPassword:"",
            aadharCard:"",
            gender:"",
            accountCreated: false
        }
        
    }
    onInputChange=(event)=>{
        const val=event.target.value;
        const id=event.target.id;
        this.setState({[id]:val});
    }

    onRegister=()=>{
        if(this.state.name==="" || this.state.phno==="" || this.state.dob==="" || 
        this.state.email==="" || this.state.username===" " || this.state.password==="" || 
        this.state.aadharCard==="" || this.state.gender==="" ){
            alert('Please enter all the required details!');
        }
        else{
            fetch('http://localhost:3000/register',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    name:this.state.name,
                    email:this.state.email,
                    username:this.state.username,
                    password:this.state.password,
                    phno:this.state.phno,
                    dob:this.state.dob,
                    aadharCard:this.state.aadharCard,
                    gender:this.state.gender
                })
            })
            .then(response=>response.json())
            .then(user=>{
                if(user){
                    this.props.loadUser(user);
                    window.location.href = '/thirdFactorRegistration';
                }
            })
            .catch(err=>console.log(err))
        }
    
    } 

    render(){
        return(
            <div className='container'>
                <div className='FormWrap'>
                    <h1 className='Icon'>Zenith Bank</h1>
                    <div className='FormContent'>
                        <form className='form'>
                            <h1>Create a new Account</h1>
                            <label>Full Name</label>
                            <input type="text" id="name" value={this.state.name} onChange={this.onInputChange} required />
                            <label>Phone Number</label>
                            <input type="number" id="phno" value={this.state.phno} onChange={this.onInputChange} required />
                            <label>Date Birth</label>
                            <input type="date" id="dob" value={this.state.dob} onChange={this.onInputChange} />
                            <label>Email</label>
                            <input id="email" value={this.state.email} onChange={this.onInputChange} type="email" />
                            <label>Username</label>
                            <input type="text" id="username" value={this.state.username} onChange={this.onInputChange} required />
                            <label>Password</label>
                            <input type="password" id="password" value={this.state.password} onChange={this.onInputChange} required />
                            <label>Confirm Password</label>
                            <input type="password" id="confirmPassword" required />
                            <label>Aadhar Number</label>
                            <input type="number" id="aadharCard" value={this.state.aadharCard} onChange={this.onInputChange} required />
                           <label>Gender</label> 
                            <select id="gender" onChange={this.onInputChange} defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled>Select your gender</option>
                                <option value="M">Male</option>    
                                <option value="F">Female</option>
                            </select> 
                            <a className='buttons' type="submit" value="Register" onClick={this.onRegister} >Register</a>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;