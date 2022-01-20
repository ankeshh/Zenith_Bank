import React from "react";
import SideMenu from "../../modules/SideMenu";
import NewAccount from '../../../LaunchPage/images/NewAccount.svg'
import{ ComponentWrapper } from "../../HomeElements";
import {CardWrapper, DefaultAccount,
        FieldText,
        FormField,
        Form,
        HeadingText,
        SubText, 
        FieldInput,
        Button,
        Picture
    } from "./AddAccountElements";
import { AccountNumber, AccountText } from "./AccountElements";
class AddAccount extends React.Component {
    constructor(props){
        super(props);
        this.state={
            accNo: Math.floor(2E9+Math.random()*1E9),
            label: '',
            type: '',
            limit: 0,

        }
    }

    onLabelChange = (event) => {
        this.setState({label: event.target.value})
    }

    onTypeChange = (event) => {
        this.setState({type: event.target.value})
    }

    onLimitChange = (event) => {
        this.setState({limit: event.target.value})
    }

    onSubmit = () => {
        fetch('http://localhost:3000/addaccount', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                accNo: this.state.accNo,
                id: this.props.user.id,
                type: this.state.type,
                limit: this.state.limit,
                label: this.state.label
            })
        })
        .then(response => response.json())
        .then(window.location.href = "/account")
        .catch(err => console.log(err));
    }

    render() {
        return(
            <>
                <ComponentWrapper>
                    <SideMenu/>
                    <DefaultAccount>
                        <HeadingText>Add account</HeadingText>
                        <SubText>Simply enter in the details below to create a new account</SubText>
                        <CardWrapper>
                        
                            <FormField>
                                
                                <Picture src={NewAccount}/>
                                <Form>
                                    <AccountText>Your new account number </AccountText>
                                    <AccountNumber>#{this.state.accNo}</AccountNumber>
                                    <FieldText>Account label</FieldText>
                                    <FieldInput type="text" id="label" required onChange={this.onLabelChange}/>
                                    <FieldText>Account type</FieldText>
                                    <FieldInput type="text" id="type" required onChange={this.onTypeChange}/>
                                    <FieldText>Maximum spend limit</FieldText>
                                    <FieldInput type="number" id="limit" required onChange={this.onLimitChange}/>
                                    <Button to="/account" type="submit" value="Add" onClick={this.onSubmit}>Add Account</Button>
                                </Form>
                            </FormField>
                        </CardWrapper>
                    </DefaultAccount>
                    
                </ComponentWrapper>
            </>
        )
    }
}

export default AddAccount;