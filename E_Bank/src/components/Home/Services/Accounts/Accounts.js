import React from "react";
import SideMenu from "../../modules/SideMenu";
import{  Heading, HeadingText, SubText } from "../../HomeElements";
import {DefaultAccount,
        Text, 
        ComponentWrapper,
        AccountBalance, 
        AccountCard, 
        AccountNumber, 
        AccountText, 
        AccountType, 
        CardWrapper, 
        AccountIcon,
        AccountTag,
        AccountAdd,
        AboutAccount,
        AccountChart,
        AccountInformation,
        AccountSummary,
        DeleteAccount
    } from "./AccountElements";
import AccountInfo from "./AccountInfo";
import AccountTransChart from "../Charts/AccountTransChart";

class Accounts extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user_acc: [],
            acc_selected: false,
            account: {
                number: 0,
                balance: 0,
                label: '',
                type: '',
                limit: ''
            }
        }
    }

    componentDidMount(){
        this.getAccount();
    }

    getAccount = () => {
        fetch(`http://localhost:3000/getaccount/${this.props.user.id}`)
        .then(response => response.json())
        .then(accounts => {
            this.setState({user_acc: accounts})
        })
        .catch(err => console.log(err));
    }

    selectAcc = (account) => {
        this.setState({
            acc_selected: true,
            account: {
                number: account.acc_no,
                balance: account.balance,
                label: account.acc_label,
                type: account.acc_type,
                limit: account.acc_limit
            }
        });
    }

    closeAccount = (acc_num) => {
        if(this.state.account.balance !== 0){
            fetch(`http://localhost:3000/closeaccount/${acc_num}`)
            .then(response => response.json())
            .then(this.setState({
                    acc_selected: false
                })
            )
            .then(window.location.reload(false))
            .catch(err => console.log(err));
        }
        else{
            alert('Your account should have no balance. Please trasfer it to a different account.')
        }
        
    }

    render() {
        return(
            <>
                <ComponentWrapper>
                    <SideMenu/>
                    {  
                        this.state.acc_selected ? 
                        <>
                            <Heading>
                                <HeadingText>Account #{this.state.account.number}</HeadingText>
                                <SubText>Here is a detailed view of your account</SubText>
                            </Heading>
                            <AboutAccount>
                                <AccountInformation>
                                    <Text>Account name: {this.state.account.label}</Text>
                                    <Text>Account balance: {this.state.account.balance}</Text>
                                    <Text>Account type: {this.state.account.type}</Text>
                                    <Text>Account limit: {this.state.account.limit}</Text> 
                                    <DeleteAccount onClick={() => this.closeAccount(this.state.account.number)}>Close Account</DeleteAccount>
                                </AccountInformation>
                                <AccountSummary>
                                    <AccountInfo account={this.state.account.number}/>
                                </AccountSummary>
                            </AboutAccount>
                            <AccountChart>
                                <AccountTransChart acc_number={this.state.account.number}/>
                            </AccountChart>
                        </>
                        : 
                        <DefaultAccount>
                            <Heading>
                                <HeadingText>Your Accounts</HeadingText>
                                <SubText>Click to view more details</SubText>
                            </Heading>
                            <CardWrapper>
                                {this.state.user_acc.map((account, i)=>(
                                    
                                        <AccountCard key={i} onClick={() => this.selectAcc(account)}>
                                            <AccountText>Account number:</AccountText>
                                            <AccountNumber>#{account.acc_no}</AccountNumber>
                                            <AccountText>Account tag:</AccountText>
                                            <AccountTag>{account.acc_label}</AccountTag>
                                            <AccountText>Balance:</AccountText>
                                            <AccountBalance>${account.balance}</AccountBalance>
                                            <AccountText>Account type:</AccountText>
                                            <AccountType>{account.acc_type}</AccountType>
                                        </AccountCard>
                                    
                                ))}
                                <AccountAdd to="/account/new">
                                    <AccountIcon/>
                                </AccountAdd>
                            </CardWrapper>
                        </DefaultAccount>
                    }
                </ComponentWrapper>
            </>
        )
    }
}

export default Accounts;