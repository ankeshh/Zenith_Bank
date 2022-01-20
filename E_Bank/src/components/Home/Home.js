import React from "react";
import {  
    Heading,
    CardInfoGrid,
    OtherServicesGrid,
    HeadingText,
    SubText,
    ComponentWrapper,
    TransactionInfoGrid,
    MessageCountWrapper,
    MessageCountText,
    BalanceAmount,
    BalanceGrid,
    BalanceText,
    MessageCountBubble,
    TopCard,
    TopCardText,
    BalanceStatement,
    AmountCotainer
    } from "./HomeElements";
import{withRouter} from "react-router-dom";
import SideMenu from "./modules/SideMenu";
import HomeTransChart from "./Services/Charts/HomeTransChart";
import HomeCard from "./Services/Cards/HomeCard";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            balance: 0,
            message: 0,
            cardDetails:"",
            ready:false
        };
    }

    componentDidMount() {
        ;
        fetch(`http://localhost:3000/totalbalance/${this.props.user.id}`)
        .then(response => response.json())
        .then(balance => {
            this.setState({balance: balance})
        })
        .catch(err => console.log(err));

        fetch(`http://localhost:3000/messagecount/${this.props.user.id}`)
        .then(response => response.json())
        .then(count => {
            this.setState({message: count})
        })
        .catch(err => console.log(err));

        fetch(`http://localhost:3000/getCard/${this.props.user.id}`)
        .then(response=>response.json())
        .then(data=>{
            if(data!=""){
                const data1=data[0];
                this.setState({cardDetails:data1,ready:true});
            }
            else{
                this.setState({ready:false});
            }
        })

    }

    render(){
        
        return(
            <>
                <ComponentWrapper>
                    <SideMenu/>
                    <Heading>
                        <HeadingText>Welcome {this.props.user.name}</HeadingText>
                        <SubText>Here is a quick summary of your account</SubText>
                    </Heading>
                    <TransactionInfoGrid>
                        <HomeTransChart user={this.props.user.id}/>
                    </TransactionInfoGrid>
                    <CardInfoGrid>
                        <MessageCountWrapper>
                            <MessageCountText>New messages</MessageCountText>
                            <MessageCountBubble>{this.state.message}</MessageCountBubble>
                        </MessageCountWrapper>
                        <BalanceGrid>
                            <BalanceText>Available Balance</BalanceText>
                            <AmountCotainer>
                                <BalanceAmount>${this.state.balance}</BalanceAmount>
                                <BalanceStatement to="/user/statement">Statement</BalanceStatement>
                            </AmountCotainer>
                        </BalanceGrid>
                        <TopCard>
                            <TopCardText>Your Top Card</TopCardText>
                             {   this.state.ready ? <HomeCard cards={this.state.cardDetails} /> :
                                void("0")
                                }
                        </TopCard>
                    </CardInfoGrid>
                    <OtherServicesGrid> </OtherServicesGrid>
                </ComponentWrapper>
            </>
        )
    };
} 

export default withRouter(Home);