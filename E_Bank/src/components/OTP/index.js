import React from 'react';
import { Redirect } from 'react-router';
import {Container,FormWrap,Form,FormContent, Header,OTPInput,OTPVerify,Content} from './OTPElements';

class OTP extends React.Component{
    constructor(props){
        super(props);
        this.state={
            otp:"",
            valid:false
        }
    }
    componentDidMount(){
        fetch(`http://localhost:3000/otp/${this.props.user.id}`)
            .then(response=>response.json())
            .catch(error=>{
                console.log(error);
            })
        }
    onOTPChange=(event)=>{
        this.setState({otp: event.target.value});
    }
    OTPVerify=()=>{
        fetch(`http://localhost:3000/verifyOtp/${this.props.user.id}`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                otp:this.state.otp
            })
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            this.setState({valid:data});
        })
        .catch(err=>{
            console.log(err);
        })
    }

    render(){
        return(
            <>
                <Container>
                    <FormWrap>
                        <FormContent>
                            <Form>
                                <Header>Please enter the OTP</Header>
                                <Content>We have sent a 6 digit verification code to your registered mail ID</Content>
                                <OTPInput onChange={this.onOTPChange} placeholder='Enter the 6 digit OTP'></OTPInput>
                                <OTPVerify to='/OTP' onClick={this.OTPVerify} >Verify</OTPVerify>
                                {
                                    this.state.valid ? <Redirect to='/thirdFactorSignin' /> : <Redirect to='/OTP' />
                                }
                            </Form>
                        </FormContent>
                    </FormWrap>
                </Container>
            </>
        );
    };
}

export default OTP;
