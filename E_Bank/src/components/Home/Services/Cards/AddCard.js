import React from 'react';
import { ComponentWrapper } from '../../HomeElements';
import SideMenu from '../../modules/SideMenu';
import {CardSelect,CardOptions, AddContainer, AddCardWrapper,Headline,Headline1,
    AddCardForm,AddCardBtn,Label,AddCardImg} from './CardElements';
import CardImage from '../../../LaunchPage/images/CardImage.svg'


class AddCard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userAccs:[],
            cardType:'',
            accNoChosen:'',
            exists:''
        }
    }
    componentDidMount(){
        fetch(`http://localhost:3000/getAcc/${this.props.user.id}`)
            .then(response=>response.json())
            .then(data=>{
                let tempArr=[];
                data.map(acc=>{ 
                    return tempArr.push(acc.acc_no);
                });
                this.setState({userAccs:tempArr});
            })
            .catch(err=>{
                console.log('Couldnt fetch'+err);
            })
    }

    onValueChange=(event)=>{
        const id=event.target.id;
        const value=event.target.value;
        this.setState({[id]:value});
    }

    onSubmit=()=>{
        fetch(`http://localhost:3000/genCard/${this.props.user.id}`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                accNo:this.state.accNoChosen,
                cardType:this.state.cardType
            })
        })
        .then(response=>response.json())
        .then(data=>{
            if(data){
                alert('card has been created')
            }
            else{
                alert('There already exists a card for this account');
            }
        })
    }

    render(){
        const AccOptions=this.state.userAccs.map((acc,i)=>{
            return <CardOptions key={i} value={acc} >{acc}</CardOptions>
        })
        return (
            <>
            <ComponentWrapper>
                <SideMenu/>
                <AddContainer>
                    <Headline>Add Card</Headline>
                    <Headline1>Simply enter in the details below to create a new card</Headline1>
                    <AddCardWrapper>
                        <AddCardImg src={CardImage} />
                        <AddCardForm>
                                <Label>Select the account you want to link your card with</Label>
                                <CardSelect defaultValue={'DEFAULT'} onChange={this.onValueChange} id='accNoChosen'>
                                    <CardOptions value='DEFAULT' disabled>Select your account number</CardOptions>
                                    {AccOptions}
                                </CardSelect>
                                <Label>Select your card type:</Label>
                                <CardSelect defaultValue={'DEFAULT'} onChange={this.onValueChange} id='cardType'>
                                    <CardOptions value='DEFAULT' disabled>Select your card type</CardOptions>
                                    <CardOptions value='credit'>Credit Card</CardOptions>
                                    <CardOptions value='debit'>Debit Card</CardOptions>
                                </CardSelect>
                                <AddCardBtn to="/card" type="submit" value="Add" onClick={this.onSubmit}>Add card</AddCardBtn>
                            </AddCardForm>
                    </AddCardWrapper>
                </AddContainer>
            </ComponentWrapper>
        </>
        )
    }
}
export default AddCard;