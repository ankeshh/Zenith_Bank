import React from 'react';
import SideMenu from '../modules/SideMenu';
import { ComponentWrapper } from '../HomeElements';
import {Headline,Label,UpdateDetails,EditForm, 
    InputDetail, EditContainer,EditWrap} from './SettingsElements';
import { Redirect } from 'react-router';
class EditDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            phno:"",
            dob:"",
            email:"",
            username:"",
            aadhar:"",
            updated:false
        }
    }
    onValueChange=(event)=>{
        const id=event.target.id;
        const val=event.target.value;
        this.setState({[id]:val});
    }
    updateUserDetails=()=>{
        fetch(`http://localhost:3000/updateUser/${this.props.user.id}`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                name:this.state.name,
                phno:this.state.phno,
                dob:this.state.dob,
                email:this.state.email,
                username:this.state.username,
                aadhar:this.state.aadhar
            })
        })
        .then(response=>response.json())
        .then((data)=>{
            this.setState({updated:data});
            if(data){
                alert('Your details have been updated');
            }
        })
    }
    render(){
        return (
            <>
                <ComponentWrapper>
                    <SideMenu />
                    <EditContainer>
                    <Headline>Edit your details</Headline>
                        <EditWrap>
                            <EditForm>
                            <Label>Name:</Label>
                            <InputDetail placeholder={this.props.user.name} id='name' type='text' onChange={this.onValueChange}></InputDetail>
                            <Label>Username:</Label>
                            <InputDetail placeholder={this.props.user.username} id='username' type='text' onChange={this.onValueChange}></InputDetail>
                            <Label>Email:</Label>
                            <InputDetail placeholder={this.props.user.email} id='email' type='email' onChange={this.onValueChange}></InputDetail>
                            <Label>Date of Birth:</Label>
                            <InputDetail placeholder={this.props.user.dob.slice(0,10)} id='dob' type="date" onChange={this.onValueChange}></InputDetail>
                            <Label>Phone Number:</Label>
                            <InputDetail placeholder={this.props.user.phno} id='phno' onChange={this.onValueChange}></InputDetail>
                            <Label>Aadhar</Label>
                            <InputDetail placeholder={this.props.user.aadhar} id='aadhar' onChange={this.onValueChange}></InputDetail>
                            <UpdateDetails to='/settings/editDetails' onClick={this.updateUserDetails}>Update Details</UpdateDetails>
                            {
                                this.state.updated ? <Redirect to='/settings' /> : <Redirect to='/settings/editDetails' />
                            }
                    </EditForm>
                        </EditWrap>
                    </EditContainer>
                </ComponentWrapper>
            </>
        )
    }
}

export default EditDetails
