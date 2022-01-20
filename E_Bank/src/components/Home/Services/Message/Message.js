import React from "react";
import SideMenu from "../../modules/SideMenu";
import {ComponentWrapper, Heading, MessageWrapper, MessageText, MessageHeading, AcceptText,RejectText, MessageContent, BenefMessage, DeleteMsg} from "./MessageElements";
import { HeadingText, SubText } from "../Accounts/AddAccountElements";
class Message extends React.Component {
    constructor(props){
        super(props);
        this.state={
            benef_msg: {},
            acc_msg: {}
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3000/requestlist/${this.props.user.id}`)
        .then(respone => respone.json())
        .then(list => {
            this.setState({benef_msg: list});
        });
        
        fetch(`http://localhost:3000/message/${this.props.user.id}`)
        .then(respone => respone.json())
        .then(message => {
            this.setState({acc_msg: message});
        });
        
    }

    handleRequest = (for_id, response) => {
        fetch('http://localhost:3000/beneficiary/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user_id: this.props.user.id,
                for_id: for_id,
                request_response: response
            })
        })
        .then(response => response.json())
        .then(status => {
            alert("The user now has you as their beneficiary");
            window.location.reload(false);
        })
        .catch(err => console.log(err));
    }

    delMessage = (msg_id) => {
        fetch(`http://localhost:3000/deletemessage/${msg_id}`)
        .then(respone => respone.json())
        .then(message => {
            window.location.reload(false);
        });
    }

    render() {
        return (
            <>
                <ComponentWrapper>
                    <SideMenu/>
                    <Heading>
                        <HeadingText>Message</HeadingText>
                        <SubText>Find your recent messages</SubText>
                    </Heading>
                    <MessageWrapper>
                        <MessageContent>
                            <MessageHeading>Beneficiary requests</MessageHeading>
                            {
                                Object.keys(this.state.benef_msg).length> 0 
                                ?
                                    Object.values(this.state.benef_msg).map((obj, index) => (
                                        <BenefMessage key={index}>
                                        <MessageText >User {obj.user_name} has sent a beneficiary request</MessageText>
                                        <AcceptText onClick={() => this.handleRequest(obj.user_id, 'true')}>Accept</AcceptText>
                                        <RejectText onClick={() => this.handleRequest(obj.user_id, 'false')}>Decline</RejectText>
                                        </BenefMessage>
                                    ))
                                :
                                    <MessageText>No new request</MessageText>
                            }
                        </MessageContent>
                        
                        <MessageContent>
                            <MessageHeading>Account</MessageHeading>
                            {
                                Object.keys(this.state.acc_msg).length> 0 
                                ?
                                    Object.values(this.state.acc_msg).map((obj, index) => (
                                        <BenefMessage key={index}>
                                        <MessageText>{obj.description} on {obj.date}</MessageText>
                                        <DeleteMsg onClick={()=>this.delMessage(obj.msg_id)}></DeleteMsg>
                                        </BenefMessage>
                                    ))
                                :
                                    <MessageText>No new message</MessageText>
                            }
                        </MessageContent>
                    </MessageWrapper>
                </ComponentWrapper>
            </>
        )
    } 
}

export default Message;