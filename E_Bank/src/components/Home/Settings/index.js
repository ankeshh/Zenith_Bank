import React from 'react';
import SideMenu from '../modules/SideMenu';
import { ComponentWrapper } from '../HomeElements';
import {Detail,EditButton,ChangePassword,
    Container,FormWrap, Form, Avatar} from './SettingsElements';
import MaleAvatar from '../../LaunchPage/images/MaleAvatar.svg';
import FemaleAvatar from '../../LaunchPage/images/FemaleAvatar.svg';


class index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:{
                name:"",
                phno:"",
                dob:"",
                email:"",
                username:"",
                aadhar:"",
                gender:""
            }
        }
    }
    componentDidMount(){
        fetch(`http://localhost:3000/userDetails/${this.props.user.id}`)
            .then(response=>response.json())
            .then(data=>{
                this.setState(Object.assign(this.state.user,data));
            })
    }
    render(){
        return(
            <>
                <ComponentWrapper>
                    <SideMenu />
                    <Container>
                        <FormWrap>
                            <Form>
                                <Avatar src={ this.state.gender==="M" ? MaleAvatar : FemaleAvatar } />
                                <Detail>Name : {this.state.user.name}</Detail>
                                <Detail>Username: {this.state.user.username}</Detail>
                                <Detail>Email: {this.state.user.email}</Detail>
                                <Detail>Phone Number: {this.state.user.phno}</Detail>
                                <Detail>Date of Birth: {this.state.user.dob.slice(0,10)}</Detail>
                                <Detail>Aadhar Number: {this.state.user.aadhar}</Detail>
                                <EditButton to='/settings/editDetails'>Edit</EditButton>
                                <ChangePassword to='/settings/changePassword'>Change Password</ChangePassword>
                            </Form>
                        </FormWrap>

                    </Container>
                </ComponentWrapper>
            </>
        )
    }
}

export default index
