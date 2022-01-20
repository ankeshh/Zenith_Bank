import React from "react";
import{ ComponentWrapper } from "../../HomeElements";
import{ TransactionForm,
        Heading,
        TransactionComponent,
        FormHeading,
        Button,
        ButtonField,
        ChangeForm,
        FieldInput,
        FieldText,
        OptionText,
        OptionInput,
        InformationComponent,
        AccountSelected,
        AccountHeading,
        AccountSubtext,
        Picture
    } from "./TransactionElements";
import transfer from '../../../LaunchPage/images/transfer.svg'
import SideMenu from "../../modules/SideMenu";
import {HeadingText, SubText } from "../Accounts/AddAccountElements";

class Transaction extends React.Component{
    constructor(props){
        super(props);
        this.state={
            senderAccount: 0,
            receiverAccount: 0,
            amount: 0,
            benef_form: true,
            benef: [],
            user_acc: [],
            acc_selected: {
                label: 'Select to display',
                balance: 'Select to display',
                type: 'Select to display',
                limit: 0
            },
            benef_selected: {
                name: 'Select to display',
                bank: 'Select to display',
                transfer_fee: 0,
            }
        };
    }

    componentDidMount(){
        
        fetch(`http://localhost:3000/getaccount/${this.props.user.id}`)
        .then(response => response.json())
        .then(accounts => {
            this.setState({user_acc: accounts})
        });
        
        fetch(`http://localhost:3000/beneficiarylist/${this.props.user.id}`)
        .then(respone => respone.json())
        .then(log => {
            this.setState({benef: log});
        });
    }

    onTransfer = () =>{
        if(this.state.amount > this.state.acc_selected.limit)
            alert('The amount entered exceeds the maximum spend limit. Enter value within limit and try again.')
        else{
            fetch('http://localhost:3000/transaction', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    sender_acc: this.state.senderAccount,
                    receiver_acc: this.state.receiverAccount,
                    amount: this.state.amount,
                    transfer_fee: this.state.benef_selected.transfer_fee
                })
            })
            .then(response => response.json())
            .then(status => {
                alert(status);
                window.location.reload(false);
            })
            .catch(err => console.log(err));
        }   
    }

    changeForm = () => {
        if(this.state.benef_form){
            this.setState({benef_form: false});
        }
        else{
            this.setState({benef_form: true});
        }
    }

    onValueChange = (event) => {
        const id = event.target.id;
        const value=event.target.value;
        this.setState({[id]: value});
    }

    onBenefChange = (event) => {
        const value=event.target.value;
        this.setState({receiverAccount:value}, () => {
            this.state.benef.forEach((benef) => {
                if(benef.benef_acc_no === this.state.receiverAccount){
                    this.setState({
                        benef_selected: {
                            name: benef.benef_name,
                            bank: benef.benef_bank,
                            transfer_fee: benef.transfer_fee
                        }
                    })
                }
            
            })
        });
    }

    onAccChange = (event) => {
        const value=event.target.value;
        this.setState({senderAccount:value}, () => {
            this.state.user_acc.forEach((account) => {
                if(account.acc_no === this.state.senderAccount){
                    this.setState({
                        acc_selected: {
                            label: account.acc_label,
                            balance: account.balance,
                            type: account.acc_type,
                            limit: account.acc_limit
                        }
                    })
                }
            
            })
        });
    }

    render(){

        const AccArray=this.state.user_acc.map((opt, index) => {
            return <OptionInput key={index} value={opt.acc_no}>{opt.acc_no}</OptionInput>
        });

        const BenefArray = this.state.benef.map((opt, index) => {
            return <OptionInput key={index} value={opt.benef_acc_no}>{opt.benef_acc_no}</OptionInput>
        });

        return(
            <>
                <ComponentWrapper>
                    <SideMenu/>
                    <Heading>
                        <HeadingText>Transaction</HeadingText>
                        <SubText>Fill in the specified fields to transfer credits </SubText>
                    </Heading>
                    
                    {
                        this.state.benef_form
                        ? 
                        <>
                            <TransactionComponent>
                                <TransactionForm>
                                    <FormHeading>Transfer to a beneficiary</FormHeading>

                                    <FieldText>Select a beneficiary:</FieldText>
                                    <OptionText onChange={this.onBenefChange} defaultValue={'DEFAULT'}>
                                        <OptionInput value="DEFAULT" disabled >Select account</OptionInput>
                                        {BenefArray}
                                    </OptionText>
                                    <FieldText>Select an account:</FieldText>
                                    <OptionText onChange={this.onAccChange}  defaultValue={'DEFAULT'}>
                                        <OptionInput value="DEFAULT" disabled>Select account</OptionInput>
                                        {AccArray}
                                    </OptionText>
                                    <FieldText>Amount to transfer:</FieldText>
                                    <FieldInput onChange={this.onValueChange} id="amount"></FieldInput>
                                    <ButtonField>
                                        <Button type="submit" value="transfer" onClick={this.onTransfer}>TRANSFER AMOUNT</Button>
                                        <ChangeForm onClick={this.changeForm}>Enter receiver account number</ChangeForm>
                                    </ButtonField>
                                </TransactionForm>
                            </TransactionComponent>

                            <InformationComponent>
                                <AccountSelected>
                                    <AccountHeading>Account Info</AccountHeading>
                                    <AccountSubtext>Account number: #{this.state.senderAccount}</AccountSubtext>
                                    <AccountSubtext>Account label: {this.state.acc_selected.label}</AccountSubtext>
                                    <AccountSubtext>Balance: $ {this.state.acc_selected.balance}</AccountSubtext>
                                    <AccountSubtext>Limit: $ {this.state.acc_selected.limit}</AccountSubtext>
                                    <AccountHeading>Beneficiary Info</AccountHeading>
                                    <AccountSubtext>Name: {this.state.benef_selected.name}</AccountSubtext>
                                    <AccountSubtext>Bank: {this.state.benef_selected.bank}</AccountSubtext>
                                    <AccountSubtext>Transfer fee: $ {this.state.benef_selected.transfer_fee}</AccountSubtext>
                                    <ChangeForm>Please note a banking fee will be charged on the current account depending on the beneficiary selected</ChangeForm>
                                </AccountSelected>
                            </InformationComponent>
                            
                        </>
                        :
                        <>
                            <TransactionComponent>
                                <TransactionForm>
                                    <FormHeading>Transfer to a account number</FormHeading>
                                    
                                    <FieldText>Select an account:</FieldText>
                                    <OptionText onChange={this.onAccChange} defaultValue={'DEFAULT'}>Select a beneficiary:
                                    <OptionInput value="DEFAULT" disabled>Select account</OptionInput>
                                    {AccArray}
                                    </OptionText>
                                    
                                    <FieldText>Transfer to account:</FieldText>
                                    <FieldInput type='number' onChange={this.onValueChange} id='receiverAccount' required/>
                                    
                                    
                                    <FieldText>Amount to transfer:</FieldText>
                                    <FieldInput type='number' onChange={this.onValueChange} id='amount' required/>
                                    <ButtonField>
                                        <Button type="submit" value="transfer" onClick={this.onTransfer}>TRANSFER AMOUNT</Button>
                                        <ChangeForm onClick={this.changeForm}>Transfer to a beneficiary</ChangeForm>
                                    </ButtonField>
                                    
                                </TransactionForm>                             
                            </TransactionComponent>

                            <InformationComponent>
                                <AccountSelected>
                                    <AccountHeading>Account Info</AccountHeading>
                                    <AccountSubtext>Account number: #{this.state.senderAccount}</AccountSubtext>
                                    <AccountSubtext>Account label: {this.state.acc_selected.label}</AccountSubtext>
                                    <AccountSubtext>Balance: $ {this.state.acc_selected.balance}</AccountSubtext>
                                    <AccountSubtext>Limit: $ {this.state.acc_selected.limit}</AccountSubtext>
                                    <Picture src={transfer}/>
                                </AccountSelected>
                            </InformationComponent>
                            
                        </>
                    }
                </ComponentWrapper>
            </>
            
        )
    }
}

export default Transaction;