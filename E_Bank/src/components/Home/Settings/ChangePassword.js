import React from 'react';
import SideMenu from '../modules/SideMenu';
import { ComponentWrapper } from '../HomeElements';
import {UpdateContainer,UpdateWrap, UpdateForm,Headline,
    EnterLabel, InputDetail,VerifyPassword,PasswordImg} from './SettingsElements';
import { Redirect } from 'react-router';
import Password from '../../LaunchPage/images/Password.svg';

class ChangePassword extends React.Component {
    constructor(props){
        super(props);
        this.state={
            oldPassword:"",
            verified:false,
            update:false,
            newPassword:"",
            newConfirmPassword:""
        }
    }
    onInputChange=(event)=>{
        const id=event.target.id;
        const value=event.target.value;
        this.setState({[id]:value});
    }
    verifyPassword=(event)=>{
        fetch(`http://localhost:3000/checkPassword/${this.props.user.id}`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                password:this.state.oldPassword
            })
        })
        .then(response=>response.json())
        .then(data=>{
            this.setState({verified:data});
            if(!data){
                alert("You have entered the wrong password!!");
            }
        })
        .catch(err=>{
            console.log('Couldnt fetch password')
        })
    }
    updatePassword=()=>{
        fetch(`http://localhost:3000/updatePassword/${this.props.user.id}`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                password:this.state.newPassword
            })
        })
        .then(response=>response.json())
        .then(data=>{
            this.setState({updated:data});
            if(data){
                alert('Password has been updated successfully');
            }
        })
        .catch(err=>{
            console.log('Couldnt fetch password')
        })
    }
    render(){
        return (
        <>
            <ComponentWrapper>
                <SideMenu />
                <UpdateContainer>
                <Headline>Change your Password</Headline>
                    <UpdateWrap>
                        <UpdateForm>
                            <PasswordImg src={Password} />
                            {
                                this.state.verified ? 
                                    <>
                                        <EnterLabel>Enter your new password</EnterLabel>
                                        <InputDetail placeholder='New Password' id='newPassword' type='password' onChange={this.onInputChange}></InputDetail>
                                        <EnterLabel>Confirm your password</EnterLabel>
                                        <InputDetail placeholder='Password' id='newConfirmPassword' type='password' onChange={this.onInputChange} ></InputDetail>
                                        <VerifyPassword to='/settings/changePassword' onClick={this.updatePassword}>Update Password</VerifyPassword>
                                    </>
                                : 
                                    <>
                                        <EnterLabel>Enter your old password</EnterLabel>
                                        <InputDetail placeholder='Password' id='oldPassword' type='password' onChange={this.onInputChange} ></InputDetail>
                                        <VerifyPassword to='/settings/changePassword' onClick={this.verifyPassword}>Verify</VerifyPassword>
                                    </>
                            }
                            {
                                this.state.updated ? <Redirect to='/settings' /> : <Redirect to='/settings/changePassword' />
                            }
                            </UpdateForm>
                    </UpdateWrap>
                </UpdateContainer>
            </ComponentWrapper>
        </>
    )
    }
}

export default ChangePassword
